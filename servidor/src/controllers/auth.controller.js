import Usuario from '../models/user.js';
import jwt from 'jsonwebtoken';
import Role from '../models/role.js';
import nodemailer from 'nodemailer';
import { getRandomInt } from '../utils/math.utils.js';


export const signIn = async (req, res) => {
    try {
        let redirect;
        
        const { correo, contrasena, keepSession } = req.body;
        
        const usuarioEncontrado = await Usuario.findOne({correo: correo}).populate("role")
        
        if (!usuarioEncontrado) {
            return res.status(404).json({token: null, msg: "Usuario no encontrado", redirect: '/signin?error=user%20not%20found'});
        }

        if (!usuarioEncontrado.contrasena) {
            return res.status(401).json({ token: null, msg: "Contraseña no encontrada", redirect: '/signin?error=password%20not%20found'});
        }
        
        const matchPass = await Usuario.comparePassword(contrasena, usuarioEncontrado.contrasena);
        
        if (!matchPass) {
            return res.status(401).json({token: null, msg: "Contraseña Invalida", redirect: '/signin?error=invalid%20password'});
        }

        if (['admin', 'empleado'].includes(usuarioEncontrado.role[0].nombre)) {
            redirect = '/dashboard'
        } else {
            redirect = '/perfil'
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

        return res.status(200).json({ msg: "Usuario autenticado, iniciando sesión..." , token: tokens, redirect: redirect });
    } catch (error) {
        console.log(error)
        res.status(500).json('Error al autenticar el usuario')
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
        return res.status(400).json({ msg: 'Correo ya existe', redirect: '/signup?email%20already%20exists' });
    }
    
    const identFound = await Usuario.findOne({ identificacion: identificacion });

    if (identFound) {
        return res.status(400).json({ msg: 'Identificación ya existe', redirect: '/signup?identification%20already%20exists'});
    }

    const usuarioGuardado = await nuevoUsuario.save();

    jwt.sign({id: usuarioGuardado._id}, process.env.SECRET_KEY, {
        expiresIn: 864000 //24 Horas
    });

    res.status(201).json({ msg: 'Registro exitoso.' , redirect: '/signin'})
};

export const forgotPass = async (req, res) => {
    const { email, verificationCode } = req.body

    if (!verificationCode || verificationCode === null) {
        let transporter
        let user
    
        // VALIDACIÓN DE CONEXIÓN CON EL SERVICIO DE EMAIL
        transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // use TLS
            auth: {
                user: process.env.EMAIL_SMTP,
                pass: process.env.PASSW_SMTP,
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

        const code = getRandomInt(100000 , 999999)

        const userUpdateCode = await Usuario.findOneAndUpdate({_id: user._id}, {codigo: code}, {new: true})

        const tokenCode = jwt.sign({id: user._id, codigo: code, correo: email}, process.env.SECRET_KEY, {expiresIn: 60 * 30})
        
        const html = `<div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto;">
            <h2 style="color: #005087;">Restablecimiento de contraseña</h2>
            <p>Hola,</p>
            <p>
                Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>Abraj Kudai</strong>.
            </p>
            <p>
                Si has sido tú, tu código de verificación es:
            </p>
            <p style="font-size: 24px; font-weight: bold; color: #007bff;">
                ${code}
            </p>
            <p>
                O alternativamente, puedes hacer clic en el siguiente enlace:
            </p>
            <p>
                <a href="https://www.abrajkudai.com/restorepassword?t=${tokenCode}" style="color: #007bff;">
                https://www.abrajkudai.com/restorepassword?t=${tokenCode}
                </a>
            </p>
            <p>
                Este enlace será válido por <strong>30 minutos</strong>. Si no realizas el cambio dentro de ese periodo, deberás solicitar uno nuevo.
            </p>
            <p>
                Si <strong>no solicitaste esta recuperación</strong>, puedes ignorar este mensaje. Tu cuenta seguirá segura.
            </p>
            <p>
                Gracias por confiar en <strong>Abraj Kudai</strong>. Te esperamos pronto.
            </p>
            <p>Atentamente,<br><strong>El equipo de Abraj Kudai</strong></p>
            <hr style="margin-top: 30px;">
            <p style="font-size: 12px; color: #888;">
                Si tienes problemas para hacer clic en el enlace, copia y pégalo en tu navegador.
            </p>
            </div>`;

        const message = {
            from: `"Support Abraj Kudai" <${process.env.FROM_EMAIL_SMTP}>`,
            to: email,
            subject: 'Solicitud de cambio de contraseña de Abraj Kudai',
            text: `Hola, Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en Abraj Kudai. Si has sido tú, el codigo de verificación es ${code} o alternativamente clic en el siguiente enlace: https://www.abrajkudai.com/restorepassword?t=${tokenCode} Este enlace será válido por 30 minutos. Si no realizas el cambio dentro de ese periodo, deberás solicitar uno nuevo. Si no has solicitado esta recuperación, puedes ignorar este mensaje. Tu cuenta seguirá segura. Gracias por confiar en Abraj Kudai. Te esperamos pronto. Atentamente, El equipo de Abraj Kudai`,
            html: html
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

        if (user.codigo === parseInt(verificationCode)){
            
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
}