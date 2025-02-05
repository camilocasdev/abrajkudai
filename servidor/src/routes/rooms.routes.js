import {Router} from 'express';
import * as roomsctrl from '../controllers/rooms.controller.js';
import { verifyToken } from "../middlewares/authjwt.js";

const router = Router();

router.get('/', roomsctrl.roomList);

export default router;