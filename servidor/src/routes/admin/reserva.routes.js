import { Router } from 'express'
import * as reservactrl from '../../controllers/reserva.controller.js';
import { verifyToken, refreshToken, isAdminOrEmpleado } from "../../middlewares/authjwt.js";

const router = Router();

//Controladores para Empleados (A Implementar)
router.get('/reserva', [ refreshToken, verifyToken, isAdminOrEmpleado] , reservactrl.getReserva)
router.get('/reserva/:reservaId', [ refreshToken, verifyToken], reservactrl.getReservaId) // Operación por ID
router.put('/reserva/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado], reservactrl.updateReserva) // Operación por ID
router.delete('/reserva/:reservaId', [refreshToken, verifyToken, isAdminOrEmpleado] ,reservactrl.deleteReserva) // Operación por ID


export default router;