import {Router} from 'express';
import * as reservactrl from '../controllers/reserva.controller.js';
import { verifyToken, isAdmin, isEmpleado, isUsuario, isAdminOrEmpleado, refreshToken } from "../middlewares/authjwt.js";

const router = Router();

//Controladores para Empleados (A Implementar)
router.get('/reserva', [ refreshToken, verifyToken, isAdminOrEmpleado] , reservactrl.getReserva)
router.get('/reserva/:reservaId', [ refreshToken, verifyToken], reservactrl.getReservaId) // Operación por ID
router.put('/reserva/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.updateReserva) // Operación por ID
router.delete('/reserva/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado] ,reservactrl.deleteReserva) // Operación por ID

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.get('/paydata', [ refreshToken, verifyToken ], reservactrl.payData)
router.post('/booking/create', [ refreshToken, verifyToken ], reservactrl.bookingToPaying)
router.post('/booking/confirm', [ refreshToken, verifyToken ] , reservactrl.bookingConfirmPay)

export default router;