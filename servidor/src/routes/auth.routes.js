import {Router} from 'express';
import * as authctrl from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/authjwt.js'

const router = Router();

router.post('/signin', authctrl.signIn)
router.post('/signup', authctrl.signUp)

export default router;