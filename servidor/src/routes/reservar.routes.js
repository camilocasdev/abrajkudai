import {Router} from 'express';
import * as reservactrl from '../controllers/reserva.controller.js';
import { verifyToken, isAdmin, isEmpleado, isUsuario, isAdminOrEmpleado } from "../middlewares/authjwt.js";

const router = Router();

//Controladores para Empleados (A Implementar)
router.get('/reserva', [verifyToken, isAdminOrEmpleado] , reservactrl.getReserva)
router.get('/reserva/:reservaId', [verifyToken], reservactrl.getReservaId) // Operación por ID
router.put('/reserva/:reservaId', [verifyToken, isAdminOrEmpleado], reservactrl.updateReserva) // Operación por ID
router.delete('/reserva/:reservaId', [verifyToken, isAdminOrEmpleado] ,reservactrl.deleteReserva) // Operación por ID

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.get('/paydata', [ verifyToken ], reservactrl.payData)
router.post('/booking/create', [ verifyToken ], reservactrl.bookingToPaying)
router.post('/booking/confirm', [ verifyToken ] , reservactrl.bookingConfirmPay)
export default router;