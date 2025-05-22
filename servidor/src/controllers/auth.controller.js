import Usuario from '../models/user';
import jwt from 'jsonwebtoken';
import Role from '../models/role';
import nodemailer from 'nodemailer';



export const signIn = async (req, res) => {
    try {

        const { correo, contrasena, keepSession } = req.body;
        
        const usuarioEncontrado = await Usuario.findOne({correo: correo}).populate("role")
        
        if (!usuarioEncontrado) {
            return res.status(401).json({token: null, msg: "Usuario no encontrado", redirect: '/signin?error=user%20not%20found'});
        }

        if (!usuarioEncontrado.contrasena) {
            return res.status(401).json({ token: null, msg: "Contraseña no encontrada", redirect: '/signin?error=password%20not%20found'});
        }
        
        const matchPass = await Usuario.comparePassword(contrasena, usuarioEncontrado.contrasena);
        
        if (!matchPass) {
            return res.status(401).json({token: null, msg: "Contraseña Invalida", redirect: '/signin?error=invalid%20password'});
        }
        const tokens = ['accessToken', 'Tookie'];

        if (keepSession === false) {
            
            tokens.forEach((name, i) => {
                let expire;
                if (name === 'Tookie'){
                    expire = {maxAge: parseInt(process.env[`EXPIRE_COOKIE_${name}`])}
                }
                tokens[i] = jwt.sign({id: usuarioEncontrado._id, refresh: keepSession}, process.env.SECRET_KEY, {
                    expiresIn: parseInt(process.env[`EXPIRE_TOKEN_${name}`])
                })
                console.log({nombre: name, tokenExpire: process.env[`EXPIRE_TOKEN_${name}`], cookieExpire: {...expire}})


                res.cookie(name, tokens[i], {
                    path: process.env.COOKIE_CONFIG_ENV,
                    secure: process.env.COOKIE_CFG_SECURE,
                    httpOnly: process.env.COOKIE_CFG_HTTPONLY,
                    samesite: process.env.COOKIE_CFG_SAME_SITE,
                    ...expire
                })
            })
        } else {
            tokens.forEach((name, i) => {

                tokens[i] = jwt.sign({id: usuarioEncontrado._id, refresh: keepSession}, process.env.SECRET_KEY, {
                    expiresIn: parseInt(process.env[`EXPIRE_TOKEN_${name}`])
                })

                res.cookie(name, tokens[i], {
                    path: process.env.COOKIE_CONFIG_ENV,
                    secure: process.env.COOKIE_CFG_SECURE,
                    httpOnly: process.env.COOKIE_CFG_HTTPONLY,
                    samesite: process.env.COOKIE_CFG_SAME_SITE,
                    maxAge: parseInt(process.env[`EXPIRE_COOKIE_${name}`])
                })

            })
        }

        // IMPLEMENTAR DOS TOKENS, UNO DE CORTA DURACIÓN Y OTRO DE RENOVACIÓN PARA REDUCIR RIESGOS.

        return res.json({ msg: "Usuario autenticado, iniciando sesión..." , token: tokens });
    } catch (error) {
        console.log(error)
        res.status(400).json('Error al autenticar el usuario')
    }
};
    
export const signUp = async (req, res) => {

    const { nombre, apellido, pais, identificacion, contrasena, correo, telefono, role } = req.body;

    const nuevoUsuario = new Usuario({
        nombre,
        apellido,
        pais,
        identificacion,
        contrasena: await Usuario.encryptPassword(contrasena),
        correo,
        telefono, 
        role
    })  

    if (role){
        const foundRoles = await Role.find({nombre:{$in: role}});
        nuevoUsuario.role = foundRoles.map(role => role._id);

        if (!nuevoUsuario.role.includes("usuario")){
            const defaultRole = await Role.findOne({nombre: 'usuario'});
            nuevoUsuario.role.push(defaultRole._id)
        }
    } else {
        const defaultRole = await Role.findOne({nombre: 'usuario'});
        nuevoUsuario.role = [defaultRole._id];
    }

    const emailFound = await Usuario.findOne({ correo: correo });

    if (emailFound) {
        return res.status(400).json({ msg: 'Correo ya existe' });
    }
    
    const identFound = await Usuario.findOne({ identificacion: identificacion });

    if (identFound) {
        return res.status(400).json({ msg: 'Identificación ya existe' });
    }

    const usuarioGuardado = await nuevoUsuario.save();

    jwt.sign({id: usuarioGuardado._id}, process.env.SECRET_KEY, {
        expiresIn: 864000 //24 Horas
    });

    res.status(200).json({ msg: 'Registro exitoso.' , usuarioGuardado})
};

export const forgotPass = async (req, res) => {
    const { email, verificationCode } = req.body

    if (!verificationCode || verificationCode === null) {
        let transporter
        let user
    
        // VALIDACIÓN DE CONEXIÓN CON EL SERVICIO DE EMAIL
        transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // use TLS
            auth: {
                user: "vern.reinger64@ethereal.email",
                pass: "QEcf8KAY7eck4D8g1W",
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });
    
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                return( res.status(501).json({error: true, msg: "Error interno del servidor."}) )
            } else {
                console.log("Server is ready to take our messages");
                console.log(success)
            }
        });

        try{
            user = await Usuario.findOne({correo: email})
            if (user === null || !user) {
                throw 1;
            }
        } catch (error) {
            return (
                res.status(401).json({error: true, msg: "El correo no existe en el sistema."})
            )
        } 
    
        // CREACIÓN DE CÓDIGO Y ENVÍO DE CORREO
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
    
        const code = getRandomInt(100000 , 999999)

        const userUpdateCode = await Usuario.findOneAndUpdate({_id: user._id}, {codigo: code}, {new: true})

        const tokenCode = jwt.sign({codigo: code, correo: email}, process.env.SECRET_KEY, {expiresIn: 60 * 30})
    
        const message = {
            from: 'no-reply@abrajkudai.com',
            to: email,
            subject: 'Solicitud de cambio de contraseña de Abraj Kudai',
            text: `Hola, Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en Abraj Kudai. Si has sido tú, el codigo de verificación es ${code} o alternativamente clic en el siguiente enlace: https://www.abrajkudai.com/restorepassword?t=${tokenCode} Este enlace será válido por 30 minutos. Si no realizas el cambio dentro de ese periodo, deberás solicitar uno nuevo. Si no has solicitado esta recuperación, puedes ignorar este mensaje. Tu cuenta seguirá segura. Gracias por confiar en Abraj Kudai. Te esperamos pronto. Atentamente, El equipo de Abraj Kudai`,
            html: `<p><b>No sé</b> que es esto!</p>`
        };
    
    
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
    
            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).json({next: true, msg: "Clear"})
        });
    } else {
        
        const user = await Usuario.findOne({correo: email})

        if (user.codigo === verificationCode){
            
            const userUpdateCode = await Usuario.findOneAndUpdate({correo: email}, {codigo: null}, {new: true})

            const coded = jwt.sign({id: user._id}, process.env.SECRET_KEY, { expiresIn: 1800})

            res.cookie('rupc', coded, {
                    path: process.env.COOKIE_CONFIG_ENV,
                    secure: process.env.COOKIE_CFG_SECURE,
                    httpOnly: process.env.COOKIE_CFG_HTTPONLY,
                    samesite: process.env.COOKIE_CFG_SAME_SITE,
                    maxAge: 1800000}) //rupc = Restore User Password Cookie
            res.status(200).json({error: false, msg: 'Código verificado', redirect: '/restorepassword'})
        } else {
            res.status(401).json({error: true, msg: 'El código ingresado no es valido'})
        }
    }
    // VALIDACIÓN DE CORREO
    
}