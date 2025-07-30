import jwt from 'jsonwebtoken';
import Usuario from '../models/user.js';
import Role from '../models/role.js';

export const refreshToken = async (req, res, next) => {
    try {
        const accessCookie = req.cookies['accessToken']
        const tookieCookie = req.cookies['Tookie']

        if (!accessCookie && !tookieCookie || !accessCookie) {
            return next();
        }
        
        //PARA ESTA PARTE HAY QUE APRENDER A USAR SNIPPETS O COMO SE LLAMEN (si valen la pena usarlos acá)
        const accessTookieData = jwt.decode(accessCookie, process.env.SECRET_KEY)

        let COOKIE_CFG = {
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE,
        }
        
        if (!tookieCookie){
            if (accessTookieData.refresh === true){
                let token = jwt.sign({id: accessTookieData.id}, process.env.SECRET_KEY, {expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)})
                res.cookie('Tookie', token, {...COOKIE_CFG, maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)})
                let aToken = jwt.sign({id: accessTookieData.id, refresh: true}, process.env.SECRET_KEY, {expiresIn: parseInt(process.env.EXPIRE_TOKEN_accessToken)})
                res.cookie('accessToken', aToken, { ...process.env.COOKIE_CFG, maxAge: parseInt(process.env.EXPIRE_COOKIE_accessToken) })
                req.cookies.Tookie = token
            } else if (accessCookie) {
                let token = jwt.sign({id: accessTookieData.id}, process.env.SECRET_KEY, {expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)})
                res.cookie('Tookie', token, {...COOKIE_CFG, maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)})
                req.cookies.Tookie = token
                //Acá no se renueva el token de funciones porque el refresh != true
            }
        } else {
            const tookieCookieData = jwt.decode(tookieCookie, process.env.SECRET_KEY)

            const current = new Date()
            const left = ((tookieCookieData.exp - (current.getTime() / 1000)) / 60)

            if (left < 15 || !tookieCookie){
                console.log('Renovacion previa a la caducidad')
                let token = jwt.sign({id: tookieCookieData.id}, process.env.SECRET_KEY, {expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)})
                res.cookie('Tookie', token, {...COOKIE_CFG, maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)})

                if (accessTookieData.refresh === true){
                    let aToken = jwt.sign({id: accessTookieData.id, refresh: true}, process.env.SECRET_KEY, {expiresIn: parseInt(process.env.EXPIRE_TOKEN_accessToken)})
                    res.cookie('accessToken', aToken, { ...COOKIE_CFG, maxAge: parseInt(process.env.EXPIRE_COOKIE_accessToken) })
                }
            }
        }
        
        next();

    } catch (error) {
        console.log(error)
        res.status(402).json({msg: "Error"})
    }
}


export const verifyToken = async (req, res, next) => {

     //Limita la información o la ruta para los que no tienen un token, es decir un usuario no registrado o logeado
    try {
        let token;

        try {
            token = req.cookies['Tookie'];
        } catch (error) {
            return res.status(401).json({
                error: true,
                msg: 'No hay token, por favor inicia sesión',
                redirect: '/signin?error=not%20logged'
            })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY); //Verifica el token

        if (!decoded) return res.status(401).json({msg: "not decoded"})

        const usuario = await Usuario.findById(decoded.id, {contrasena: 0});

        if (!usuario) return res.status(401).json({
            error: true,
            message: 'Token sin usuario asociado...',
            redirect: '/signin?error=user%20not%20found'
        });

        next();

    } catch (error) {
        res.status(401).json({
            error: true,
            msg: 'Error al autenticar el token',
            redirect: '/signin?error=invalid%20token'
        });
    }
}

export const isAdmin = async (req, res, next) => {
    
    const decoded = jwt.verify(req.cookies['Tookie'], process.env.SECRET_KEY)

    const user = await Usuario.findById(decoded.id);
    const role = await Role.find({_id: user.role });  

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "admin") {
            return next();
        }
    }
    
    return res.status(403).json({message: "Requiere perfil de administrador"});
}


export const isUsuario = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);

    console.log("isEmpleado verifying...")

    const role = await Role.find({_id: {$in: user.role}});

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "usuario"){
        next()
        return;
        }
        }

    return res.status(403).json({message: "Error de lógica: Requiere perfil de Usuario"})
    
}
export const isEmpleado = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);
    const role = await Role.find({_id: {$in: user.role}});

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "empleado"){
        next()
        return;
        }
        }

    return res.status(403).json({message: "Requiere perfil de empleado"})
}

//[MEJORAR] Trabajar en hacer verificaciones individuales y no combinadas en una función...

export const isAdminOrEmpleado = async (req, res, next) => {
    try {

        const tokenData = jwt.decode( req.cookies['Tookie'] , process.env.SECRET_KEY)

        const user = await Usuario.findById(tokenData.id);
        const roles = await Role.find({ _id: { $in: user.role } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].nombre === "admin" || roles[i].nombre === "empleado") {
                return next(); // Si tiene el rol admin o empleado, continúa
            }
        }

        // Si no cumple con ninguno de los roles, retorna error
        return res.status(403).json({ message: "Requiere perfil de administrador o empleado" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor", error: error});
    }
};

//REVISAR LAS FUNCIONES SUPERIORES, EL CHEQUEO DE QUE ROL ES SE PUEDE HACER EN UNA SOLA FUNCIÓN
