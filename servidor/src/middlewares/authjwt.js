import jwt from 'jsonwebtoken';
import cfig from '../config';
import Usuario from '../models/user';
import Role from '../models/role';

export const refreshToken = async (req, res, next) => {
    try {
        
        const accessCookie = req.cookies['accessToken']
        const tookieCookie = req.cookies['Tookie']

        if (!accessCookie && !tookieCookie || !accessCookie) {
            return next();
        }
        
        //PARA ESTA PARTE HAY QUE APRENDER A USAR SNIPPETS O COMO SE LLAMEN (si valen la pena usarlos acá)
        const accessTookieData = jwt.decode(accessCookie, cfig.SECRET_KEY)
        
        if (!tookieCookie){
            if (accessTookieData.refresh === true){
                let token = jwt.sign({id: accessTookieData.id}, cfig.SECRET_KEY, {expiresIn: cfig.EXPIRE_TOKEN.Tookie})
                res.cookie('Tookie', token, {...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE.Tookie})
                let aToken = jwt.sign({id: accessTookieData.id, refresh: true}, cfig.SECRET_KEY, {expiresIn: cfig.EXPIRE_TOKEN.accessToken})
                res.cookie('accessToken', aToken, { ...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE.accessToken })
                req.cookies.Tookie = token
            } else if (accessCookie) {
                let token = jwt.sign({id: accessTookieData.id}, cfig.SECRET_KEY, {expiresIn: cfig.EXPIRE_TOKEN.Tookie})
                res.cookie('Tookie', token, {...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE.Tookie})
                req.cookies.Tookie = token
                //Acá no se renueva el token de funciones porque el refresh != true
            }
        } else {
            const tookieCookieData = jwt.decode(tookieCookie, cfig.SECRET_KEY)

            const current = new Date()
            const left = ((tookieCookieData.exp - (current.getTime() / 1000)) / 60)

            if (left < 15 || !tookieCookie){
                console.log('Renovacion previa a la caducidad')
                let token = jwt.sign({id: tookieCookieData.id}, cfig.SECRET_KEY, {expiresIn: cfig.EXPIRE_TOKEN.Tookie})
                res.cookie('Tookie', token, {...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE.Tookie})

                if (accessTookieData.refresh === true){
                    let aToken = jwt.sign({id: accessTookieData.id, refresh: true}, cfig.SECRET_KEY, {expiresIn: cfig.EXPIRE_TOKEN.accessToken})
                    res.cookie('accessToken', aToken, { ...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE.accessToken })
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
            token = await req.cookies['Tookie'];
        } catch (error) {
            res.status(401).json({
                error: true,
                msg: 'No hay token, por favor inicia sesión',
                redirect: '/signin?error=not_logged'
            })
        }
        
        const decoded = jwt.verify(token, cfig.SECRET_KEY); //Verifica el token

        if (!decoded) return res.status(401).json({msg: "not decoded"})

        const usuario = await Usuario.findById(decoded.id, {contrasena: 0});

        if (!usuario) return res.status(404).json({
            message: 'Token sin usuario asociado...'
        });

        next();

    } catch (error) {
        res.status(404).json({
            error: true,
            msg: 'Error al autenticar el token',
            redirect: '/signin?error=invalid_token'
        });
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);
    const role = await Role.find({_id: {$in: user.role}});  

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
        const user = await Usuario.findById(req.UsuarioId);
        const roles = await Role.find({ _id: { $in: user.role } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].nombre === "admin" || roles[i].nombre === "empleado") {
                return next(); // Si tiene el rol admin o empleado, continúa
            }
        }

        // Si no cumple con ninguno de los roles, retorna error
        return res.status(403).json({ message: "Requiere perfil de administrador o empleado" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

//REVISAR LAS FUNCIONES SUPERIORES, EL CHEQUEO DE QUE ROL ES SE PUEDE HACER EN UNA SOLA FUNCIÓN
