import {Router} from 'express'
import * as usersctrl from '../controllers/users.controller'
import { refreshToken, verifyToken } from '../middlewares/authjwt'

const router = Router();

router.get('/get', [ refreshToken, verifyToken ] , usersctrl.privgetuser);
router.post('/logout', usersctrl.logout);

export default router;