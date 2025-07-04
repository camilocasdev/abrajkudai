import { Router } from 'express';
import * as facturactrl from '../../controllers/factura.controller.js';
import { verifyToken, refreshToken, isAdminOrEmpleado } from "../../middlewares/authjwt.js";
var router = Router();
router.post('/factura/create', [refreshToken, verifyToken, isAdminOrEmpleado], facturactrl.createBill);
router.get('/factura/get/list', [refreshToken, verifyToken, isAdminOrEmpleado], facturactrl.getBillList);
router.get('/factura/get/:billId', [refreshToken, verifyToken, isAdminOrEmpleado], facturactrl.getBillById);
router.put('/factura/update/:billId', [refreshToken, verifyToken, isAdminOrEmpleado], facturactrl.updateBillById);
router["delete"]('/factura/delete/:billId', [refreshToken, verifyToken, isAdminOrEmpleado], facturactrl.deleteBillById);
export default router;