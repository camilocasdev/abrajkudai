import { Router } from 'express'
import * as rolectrl from '../../controllers/role.controller'
import { verifyToken, refreshToken, isAdminOrEmpleado, isAdmin } from '../../middlewares/authjwt'

const router = Router()

router.post('/role/create' , [ refreshToken, verifyToken, isAdmin ], rolectrl.roleCreate)
router.get('/role/get/list' , [ refreshToken, verifyToken, isAdminOrEmpleado ], rolectrl.roleList)
router.get('/role/get/:roleId' , [ refreshToken, verifyToken, isAdminOrEmpleado ], rolectrl.roleById)
router.put('/role/update/:roleId' , [ refreshToken, verifyToken, isAdmin ], rolectrl.roleUpdate)
router.delete('/role/delete/:roleId' , [ refreshToken, verifyToken, isAdmin ], rolectrl.roleDelete)

export default router;