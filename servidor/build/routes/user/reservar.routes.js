import { Router } from 'express';
import * as reservactrl from '../../controllers/reserva.controller.js';
import { verifyToken, refreshToken } from "../../middlewares/authjwt.js";
var router = Router();

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.post('/booking/create', [refreshToken, verifyToken], reservactrl.bookingToPaying); // Crea reserva
router.get('/booking/summary', [refreshToken, verifyToken], reservactrl.bookingSumamry); // Resumen de la reserva en transacción
router.post('/booking/confirm', [refreshToken, verifyToken], reservactrl.bookingConfirmed); // Pago de reserva

export default router;