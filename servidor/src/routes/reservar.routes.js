import {Router} from 'express';
import * as reservactrl from '../controllers/reserva.controller.js';
import { verifyToken, isAdmin, isEmpleado, isUsuario, isAdminOrEmpleado } from "../middlewares/authjwt.js";

const router = Router();

router.get('/reserva', [verifyToken, isAdminOrEmpleado] , reservactrl.getReserva)
router.get('/reserva/:reservaId', [verifyToken], reservactrl.getReservaId) // Operación por ID
router.post('/reserva/new', [ verifyToken ], reservactrl.createReserva)
router.put('/reserva/:reservaId', [verifyToken, isAdminOrEmpleado], reservactrl.updateReserva) // Operación por ID
router.delete('/reserva/:reservaId', [verifyToken, isAdminOrEmpleado] ,reservactrl.deleteReserva) // Operación por ID

export default router;