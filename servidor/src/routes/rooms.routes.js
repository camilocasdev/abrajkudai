import {Router} from 'express';
import * as roomsctrl from '../controllers/rooms.controller.js';
import { verifyToken } from "../middlewares/authjwt.js";

const router = Router();

router.get('/list', roomsctrl.roomList);
router.put('/update/:roomId', roomsctrl.roomUpdate)

export default router;