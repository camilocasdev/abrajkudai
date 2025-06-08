import {Router} from 'express';
import * as usersctrl from '../../controllers/users.controller'
import { isAdminOrEmpleado, refreshToken, verifyToken } from '../../middlewares/authjwt';

const router = Router();

router.get('/user/get/list',[ refreshToken ,verifyToken, isAdminOrEmpleado ], usersctrl.get_user)
router.get('/user/get/:userId',[ refreshToken, verifyToken, isAdminOrEmpleado ], usersctrl.get_user_by_id)
router.post('/user/create',[ refreshToken, verifyToken,isAdminOrEmpleado ], usersctrl.add_user)
router.put('/user/update/:userId',[ refreshToken, verifyToken,isAdminOrEmpleado ], usersctrl.update_user)
router.delete('/user/delete/:userId',[ refreshToken, verifyToken,isAdminOrEmpleado ], usersctrl.del_user)


export default router;