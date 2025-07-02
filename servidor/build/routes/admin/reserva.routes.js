import { Router } from 'express';
import * as reservactrl from '../../controllers/reserva.controller.js';
import { verifyToken, refreshToken, isAdminOrEmpleado } from "../../middlewares/authjwt.js";
var router = Router();

//Controladores para Empleados (A Implementar)
router.post('/booking/create', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.directBookingCreation);
router.get('/booking/get/list', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.getReserva);
router.get('/booking/get/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.getReservaId); // Operación por ID
router.put('/booking/update/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.updateReserva); // Operación por ID
router["delete"]('/booking/delete/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.deleteReserva); // Operación por ID

export default router;