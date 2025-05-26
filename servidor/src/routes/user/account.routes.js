import {Router} from 'express'
import * as userctrl from '../../controllers/users.controller'
import { refreshToken, verifyToken } from '../../middlewares/authjwt'

const router = Router();

router.get('/get', [ refreshToken, verifyToken ] , userctrl.profileData);
router.post('/logout', userctrl.logout);
router.post('/resetpassword', userctrl.newPassword)

export default router;