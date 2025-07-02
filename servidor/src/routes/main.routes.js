import { Router } from 'express'
// Admin Routes Import
import reserva_rt from './admin/reserva.routes.js'
import user_rt from './admin/user.routes.js'
import room_rt from './admin/room.routes.js'
import role_rt from './admin/role.routes.js'
import roomtype_rt from './admin/roomtype.routes.js'
import services_rt from './admin/services.routes.js'
import factura_rt from './admin/factura.routes.js'

// User Routes Import
import account_rt from './user/account.routes.js'
import auth_rt from './user/auth.routes.js'
import reservar_rt from './user/reservar.routes.js'

// Public Routes Import
import rooms_rt from './public/rooms.routes.js'

const router = Router()

router.use('/admin', reserva_rt, user_rt, room_rt, role_rt, roomtype_rt, services_rt, factura_rt)

router.use('/user', account_rt, auth_rt, reservar_rt )

router.use('/public', rooms_rt )


export default router;