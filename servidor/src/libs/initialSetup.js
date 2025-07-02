import Role from '../models/role.js';
import Room from '../models/room.js';
import Roomtype from '../models/roomtype.js';
import Reserva from '../models/reserva.js'
import User from '../models/user.js';

export const crearRole = async (req, res) => {

    try {
        const count = await Role.collection.estimatedDocumentCount();   
        if (count > 0) return;
        
        
        const values = await Promise.all([
            new Role({nombre: 'admin'}).save(),
            new Role({nombre: 'usuario'}).save(),
            new Role({nombre: 'empleado'}).save()
        ]);

    } catch (error) {
        console.log(error)
    }
}

export const defaultUsers = async (req, res) => {
    try {
        const count = await User.find({nombre:'default'}).countDocuments();
        
        if (count == 3) return;
        
        if (count == 0 || count >= 1 && count < 3) {
            
            try {
                if (count >= 1) {
                    const array = await User.find({nombre:'default'});
                    const del = await User.deleteMany({ _id: { $in: [array[0]._id, array[1]._id] } });
                } 


                const empleado = await Role.findOne({nombre: 'empleado'})
                const admin = await Role.findOne({nombre: 'admin'})
                const usuario = await Role.findOne({nombre: 'usuario'})
                
                const values = await Promise.all([
                    new User({nombre: 'default',
                        apellido: 'empleado',
                        pais: 'naa',
                        identificacion: 'naap',
                        contrasena: await User.encryptPassword('na'),
                        correo:'default@empleado.com',
                        telefono: 0,
                        role: [empleado._id],
                    }).save(),
                    new User({nombre: 'default',
                        apellido: 'admin',
                        pais: 'na',
                        identificacion: 'naa',
                        contrasena:  await User.encryptPassword('na'),
                        correo:'default@admin.com',
                        telefono: 0,
                        role: [admin._id]
                    }).save(),
                    new User({
                        nombre: 'default',
                        apellido: 'usuario',
                        pais: 'na',
                        identificacion: 'na',
                        contrasena:  await User.encryptPassword('na'),
                        correo:'default@usuario.com',
                        telefono: 0,
                        role: [usuario._id]
                    }).save()
                ]);
                
            } catch (error) {
                console.log(error)
            }
        }    
    } catch (error) {
        console.log(error);
    }
}

export const crearRoomType = async (req, res) => {
    try {
        const count = await Roomtype.collection.estimatedDocumentCount();
        if (count === 8) return;

        if (count >= 1 && count < 8) {
            try {
                if (count >= 1) {
                    const array = await Roomtype.find();
                    const del = await Roomtype.deleteMany({});
                } 
            } catch (error) {
                console.log(error)
            }
        }

        const values = await Roomtype.insertMany([

            {
                nombre: 'Junior Suite', 
                precio: 250, 
                capacidad: 3, 
                scriptLong: "<h3><strong>Junior Suite</strong></h3><p>La Junior Suite es una habitación espaciosa y elegante, diseñada para ofrecer comodidad y lujo en un ambiente acogedor. Ideal para viajeros que buscan un equilibrio entre confort y exclusividad, esta suite cuenta con una decoración sofisticada y moderna, junto con una variedad de servicios que garantizan una estancia placentera.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Amplia cama king-size o dos camas individuales, con sábanas de alta calidad.</li><li>🏡 Área de estar separada, perfecta para relajarse o trabajar.</li><li>🌅 Vistas panorámicas a la ciudad o al paisaje natural del hotel.</li><li>🖥 Smart TV de pantalla plana con canales internacionales y servicio de streaming.</li><li>☕ Cafetera y minibar, con una selección de bebidas y snacks premium.</li><li>🚿 Baño privado de lujo, con ducha de efecto lluvia y amenidades de alta gama.</li><li>💨 Aire acondicionado y calefacción, ajustables para mayor confort.</li><li>📶 WiFi de alta velocidad, ideal para trabajar o entretenerse.</li><li>🛎 Servicio a la habitación 24/7, para atender cualquier necesidad.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un espacio diseñado para el descanso y la comodidad, con detalles cuidadosamente seleccionados para hacer de tu estancia una experiencia inolvidable. La Junior Suite es la opción perfecta para parejas, viajeros de negocios o aquellos que buscan un plus de confort durante su viaje.</p>",
                scriptShort: "Una habitación espaciosa y elegante, ideal para quienes buscan comodidad y exclusividad, con modernas amenidades y vistas panorámicas.",
                imagen: ['https://nicodev.s-ul.eu/j7SH6hi3']
            },
            {
                nombre: 'Honeymoon Suite',
                precio: 300,
                capacidad: 2,
                scriptLong: "<h3><strong>Hooneymoon Suite</strong></h3><p>La Honeymoon Suite es el escape perfecto para parejas que buscan una experiencia íntima, lujosa y llena de detalles inolvidables. Diseñada para celebrar el amor, esta suite ofrece un ambiente acogedor, elegante y con comodidades exclusivas para que cada momento sea especial.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size extraconfortable, con sábanas de lujo y decoración romántica.</li><li>🌅 Vistas espectaculares, ideales para disfrutar de amaneceres y atardeceres inolvidables.</li><li>🖥 Smart TV de pantalla plana con canales internacionales y servicio de streaming.</li><li>☕ Cafetera y minibar, con una selección de bebidas y snacks premium.</li><li>🚿 Baño privado de lujo, con ducha de efecto lluvia y amenidades de alta gama.</li><li>💨 Aire acondicionado y calefacción, ajustables para mayor confort.</li><li>📶 WiFi de alta velocidad, ideal para trabajar o entretenerse.</li><li>🛎 Servicio a la habitación 24/7, para atender cualquier necesidad.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un espacio diseñado para el descanso y la comodidad, con detalles cuidadosamente seleccionados para hacer de tu estancia una experiencia inolvidable. La Honeymoon Suite es la opción perfecta para parejas que buscan un ambiente exclusivo y romántico.</p>",
                scriptShort: "Un refugio romántico con jacuzzi privado, decoración especial y servicios exclusivos para una experiencia inolvidable en pareja.",
                imagen: ['https://nicodev.s-ul.eu/eVEkueHl']
            },
            {
                nombre: 'Executive Suite',
                precio: 350,
                capacidad: 4,
                scriptLong: "<h3><strong>Executive Suite</strong></h3><p>La Executive Suite es perfecta para viajeros de negocios o personas que buscan una estancia cómoda con servicios exclusivos. Diseñada con un estilo moderno y funcional, ofrece un espacio amplio con todas las comodidades necesarias para el trabajo y el descanso.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con ropa de cama de lujo.</li><li>💼 Escritorio ejecutivo con silla ergonómica.</li><li>📶 WiFi de alta velocidad y puertos de carga.</li><li>🖥 Smart TV con acceso a plataformas de streaming.</li><li>☕ Cafetera con selección de cafés y tés premium.</li><li>🚿 Baño privado con ducha de efecto lluvia.</li><li>🛎 Servicio a la habitación 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Con un diseño pensado para la productividad y la relajación, la Executive Suite ofrece el equilibrio perfecto entre trabajo y confort.</p>",
                scriptShort: "Espacio sofisticado diseñado para viajeros de negocios, con escritorio ejecutivo, WiFi de alta velocidad y total confort.",
                imagen: ['https://nicodev.s-ul.eu/bw4KjHpc']
            },
            {
                nombre: 'Deluxe Suite',
                precio: 450,
                capacidad: 5,
                scriptLong: "<h3><strong>Deluxe Suite</strong></h3><p>La Deluxe Suite ofrece una combinación ideal de lujo y confort, con espacios elegantes y detalles sofisticados. Diseñada para viajeros exigentes, esta suite cuenta con una decoración exclusiva y comodidades de primer nivel.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con colchón de lujo.</li><li>🌅 Balcón privado con vistas impresionantes.</li><li>🖥 Smart TV de 55 pulgadas con canales premium.</li><li>☕ Minibar y cafetera con opciones gourmet.</li><li>🚿 Baño de mármol con ducha y bañera independiente.</li><li>💨 Control de clima personalizado.</li><li>🛎 Servicio de mayordomo 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Vive una estancia de lujo en un ambiente sofisticado, con todas las comodidades para una experiencia inolvidable.</p>",
                scriptShort: "Lujo y confort en una suite con balcón privado, Smart TV, baño de mármol y un ambiente exclusivo para una estancia inolvidable.",
                imagen: ['https://nicodev.s-ul.eu/NqdOigvV']
            },
            {
                nombre: 'Family Suite',
                precio: 500,
                capacidad: 8,
                scriptLong: "<h3><strong>Family Suite</strong></h3><p>La Family Suite es ideal para familias o grupos que buscan un espacio amplio y cómodo. Diseñada para ofrecer privacidad y comodidad, cuenta con múltiples áreas para el descanso y la convivencia.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Dos habitaciones separadas con camas king y twin.</li><li>🛋 Sala de estar con sofá cama.</li><li>🎮 Área de entretenimiento con TV y juegos.</li><li>☕ Cocina equipada con microondas y minibar.</li><li>🚿 Dos baños completos con amenidades de lujo.</li><li>💨 Aire acondicionado en todas las áreas.</li><li>🛎 Servicio de habitaciones para toda la familia.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un ambiente familiar con todas las comodidades, ideal para una estancia inolvidable con tus seres queridos.</p>",
                scriptShort: "Ideal para familias, con habitaciones separadas, sala de estar, cocina equipada y todas las comodidades para una estancia perfecta.",
                imagen: ['https://nicodev.s-ul.eu/pct9Cpj4']
            },
            {
                nombre: 'Presidential Suite',
                precio: 700,
                capacidad: 6,
                scriptLong: "<h3><strong>Presidential Suite</strong></h3><p>La Presidential Suite representa el máximo nivel de lujo y exclusividad. Con un diseño elegante y detalles de alto nivel, esta suite ofrece una experiencia única para huéspedes VIP.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con edredones de plumas.</li><li>🛋 Sala de estar y comedor privado.</li><li>🌅 Terraza privada con jacuzzi.</li><li>🖥 Oficina privada con escritorio ejecutivo.</li><li>🍾 Bar personalizado con selección premium.</li><li>🚿 Baño de mármol con bañera de hidromasaje.</li><li>🛎 Servicio de mayordomo y chofer privado.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Exclusividad, lujo y atención personalizada en cada detalle, diseñada para los huéspedes más exigentes.</p>",
                scriptShort: "Exclusividad y elegancia en una suite con terraza privada, jacuzzi, bar premium y servicio de mayordomo personalizado.",
                imagen: ['https://nicodev.s-ul.eu/tjaHUBsG']
            },
            {
                nombre: 'Penthouse Gold',
                precio: 1000,
                capacidad: 10,
                scriptLong: "<h3><strong>Penthouse Gold</strong></h3><p>El Penthouse Gold es una joya arquitectónica con vistas impresionantes y servicios de alto nivel. Diseñado para quienes buscan exclusividad y confort, esta suite redefine la experiencia de lujo.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Dos habitaciones principales con camas king-size.</li><li>🌅 Terraza privada con piscina infinity.</li><li>🎹 Piano de cola en la sala principal.</li><li>🍽 Comedor de lujo con chef privado disponible.</li><li>🚿 Baños de mármol con bañera de hidromasaje y sauna.</li><li>🎥 Cine privado con sistema de sonido envolvente.</li><li>🛎 Servicio de mayordomo exclusivo 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Un penthouse diseñado para los huéspedes más exigentes, donde cada detalle refleja la más alta calidad y exclusividad.</p>",
                scriptShort: "Un penthouse de lujo con piscina infinity, cine privado, comedor con chef y vistas impresionantes. Pura exclusividad.",
                imagen: ['https://nicodev.s-ul.eu/8QPXeaiq']
            },
            {
                nombre: 'Penthouse Black',
                precio: 1500,
                capacidad: 12,
                scriptLong: "<h3><strong>Penthouse Black</strong></h3><p>El Penthouse Black es la máxima expresión de lujo, exclusividad y diseño vanguardista. Un espacio único con una vista panorámica inigualable y servicios personalizados.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Suite principal con cama king-size y vestidor.</li><li>🌅 Terraza con vistas 360° y piscina privada.</li><li>🍽 Comedor con chef privado disponible.</li><li>🎵 Sistema de sonido inteligente en todas las áreas.</li><li>🚿 Spa privado con sauna y sala de masajes.</li><li>🎥 Cine en casa con butacas de lujo.</li><li>🛎 Servicio VIP con mayordomo y seguridad privada.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>El lujo en su máxima expresión, con atención personalizada y detalles exclusivos para los huéspedes más exigentes.</p>",
                scriptShort: "La máxima expresión de lujo, con spa privado, piscina 360°, mayordomo exclusivo y diseño vanguardista para los más exigentes.",
                imagen: ['https://nicodev.s-ul.eu/pKAPd7Qs']
            }

        ],{ordered: true})

    } catch (error) {
        console.log(error);
    }
}

export const crearRoom = async (req, res) => {

    try {
        const count = await Room.collection.estimatedDocumentCount();
        if (count === 1800) return;

        try {
            if (count >= 1 || count < 1800) {
                const array = await Room.find();
                const del = await Room.deleteMany();
            } else return
        } catch (error) {
            console.log(error)
        };

        let nh; //Número de Habitación
        let nhm; // Se agrega un 0 para los números menores a 10
        let tr; // Torre de habitaciónes
        let ps; // Piso de habitaciónes
        //let rt; // Tipo de habitaciónes, se obtiene de la base de datos para la iteración
        let n = 0;

        for (tr = 1; tr <= 6; tr++) {

            ps = 1;

            for (ps = 1; ps <= 10; ps++) {
                
                nh = 1;

                for (nh = 1; nh <= 30 ; nh++) {

                    if (nh<10){
                        nhm = String(nh).padStart(2, '0')
                    } else (
                        nhm = nh
                    );

                    const rt = await Roomtype.find().sort({precio: 1})

                    if (ps == 1 && nh <= 15) {
                        n = 0;
                    } else if (ps == 1 && nh > 15) {
                        n = 4;
                    } else if (ps == 2 && nh <= 15) {
                        n = 2;
                    } else if (ps == 2 && nh > 15) {
                        n = 1;
                    } else if (ps == 3 || ps == 4) {
                        n = 3;
                    } else if (ps == 5 || ps == 6) {
                        n = 5;
                    } else if (ps == 7 || ps == 8) {
                        n = 6;
                    } else if (ps == 9 || ps == 10) {
                        n = 7;
                    }

                    //console.log(`${rt.nombre}`,'Torre: ' + tr + ', Piso: ' + ps + ', Habitacion: ' + nhm)
                    const values = await Room.insertMany([
                            {numero: `T${tr} ${ps}${nhm}`, roomid: `${rt[n]._id}`}
                        ]);
                    }
                };
        }
    } catch (error) {
        console.log(error)
    }
}


export const expireBooking = async (req, res) => {
    
    const pending = await Reserva.find({estado: 'Pendiente'})
    const canceled = await Reserva.find({estado: 'Cancelado'})

    const current = new Date()
    
    for (var i = 0 ; i < canceled.length ; i++){
        const bookingDate = canceled[i].updatedAt.getTime()
        const days = Math.trunc(Math.abs(bookingDate / ( 1000 * 60 * 60 * 24 ) - current.getTime() / (86400000)))

        if ( days >= 2 ){
            try{
                const deleteBooking = await Reserva.findOneAndDelete({_id: canceled[i]._id})
                const changeRoomState = await Room.findOneAndUpdate({_id: canceled[i].habitacion}, {estado: 'Disponible'}, {new: true})
            } catch (error) {
                console.error(error)
            }
        }
    }

    for (var i = 0 ; i < pending.length ; i++ ){
        const bookingDate = pending[i].createdAt.getTime()
        const hours = Math.trunc(Math.abs(bookingDate / ( 1000 * 60 * 60) - current.getTime() / (3600000)))
        
        if ( hours > 2) {
            try {
                const changeRoomState = await Room.findOneAndUpdate({_id: pending[i].habitacion}, {estado: 'Disponible'}, {new: true})
                const changeBookingState = await Reserva.findOneAndUpdate({_id: pending[i]._id}, {estado: 'Cancelado'}, {new: true})
            } catch (error) {
                console.error(error)
            }
        } 
    }
}