import {Router} from 'express'
import * as usersctrl from '../controllers/users.controller'
import { verifyToken } from '../middlewares/authjwt'

const router = Router();

router.get('/get', [verifyToken], usersctrl.privgetuser);

export default router;