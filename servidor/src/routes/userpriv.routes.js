import {Router} from 'express'
import * as userprivctrl from '../controllers/userpriv.controller'
import { verifyToken } from '../middlewares/authjwt'

const router = Router();

router.get('/get', [verifyToken], userprivctrl.getuser);

export default router;