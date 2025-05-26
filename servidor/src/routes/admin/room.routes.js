import { Router } from 'express'
import * as roomctrl from '../../controllers/rooms.controller'
import { verifyToken, refreshToken, isAdminOrEmpleado } from "../../middlewares/authjwt.js";

const router = Router()

router.post('/room/create', [verifyToken, refreshToken, isAdminOrEmpleado] , roomctrl.createRoom)
router.get('/room/get/list', [verifyToken, refreshToken, isAdminOrEmpleado] , roomctrl.roomList)
router.get('/room/get/:roomId' , [verifyToken, refreshToken, isAdminOrEmpleado] , roomctrl.getRoomById)
router.put('/room/update/:roomId' , [verifyToken, refreshToken, isAdminOrEmpleado] , roomctrl.roomUpdate)
router.delete('/room/delete/:roomId' , [verifyToken, refreshToken, isAdminOrEmpleado] , roomctrl.deleteRoom)

export default router;