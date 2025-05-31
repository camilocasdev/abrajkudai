import {Router} from 'express';
import * as roomsctrl from '../../controllers/rooms.controller.js';
import * as roomtypectrl from '../../controllers/roomtype.controller.js'
import { refreshToken , verifyToken } from "../../middlewares/authjwt.js";

const router = Router();

router.get('/room/get/list', [ refreshToken ] , roomsctrl.roomList);
router.get('/roomtype/get', [ refreshToken ], roomtypectrl.roomtypeInfo)
//router.put('/room/update/:roomId', [ refreshToken, verifyToken ], roomsctrl.roomUpdate)

export default router;