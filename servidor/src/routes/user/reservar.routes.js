import {Router} from 'express';
import * as reservactrl from '../../controllers/reserva.controller.js';
import { verifyToken, refreshToken } from "../../middlewares/authjwt.js";

const router = Router();

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.get('/paydata', [ refreshToken, verifyToken ], reservactrl.payData)
router.post('/booking/create', [ refreshToken, verifyToken ], reservactrl.bookingToPaying)
router.post('/booking/confirm', [ refreshToken, verifyToken ] , reservactrl.bookingConfirmPay)

export default router;