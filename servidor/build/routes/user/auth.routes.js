import { Router } from 'express';
import * as authctrl from '../../controllers/auth.controller.js';
import { verifyToken } from '../../middlewares/authjwt.js';
var router = Router();
router.post('/signin', authctrl.signIn);
router.post('/signup', authctrl.signUp);
router.post('/forgotpassword', authctrl.forgotPass);
export default router;