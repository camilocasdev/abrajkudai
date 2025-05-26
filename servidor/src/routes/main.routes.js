import { Router } from 'express'
// Admin Routes Import
import reserva_rt from './admin/reserva.routes'
import user_rt from './admin/user.routes'
import room_rt from './admin/room.routes'
import role_rt from './admin/role.routes'
import roomtype_rt from './admin/roomtype.routes'
import services_rt from './admin/services.routes'

// User Routes Import
import account_rt from './user/account.routes'
import auth_rt from './user/auth.routes'
import reservar_rt from './user/reservar.routes'

// Public Routes Import
import rooms_rt from './public/rooms.routes'

const router = Router()

router.use('/admin', reserva_rt, user_rt, room_rt, role_rt, roomtype_rt, services_rt)

router.use('/user', account_rt, auth_rt, reservar_rt )

router.use('/public', rooms_rt )


export default router;