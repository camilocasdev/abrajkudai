import {Router} from 'express';
import * as roomsctrl from '../controllers/rooms.controller.js';
import { refreshToken , verifyToken } from "../middlewares/authjwt.js";

const router = Router();

router.get('/list', [ refreshToken ] , roomsctrl.roomList);
router.get('/search', [ refreshToken ], roomsctrl.search)
router.put('/update/:roomId', [ refreshToken, verifyToken ], roomsctrl.roomUpdate)

export default router;