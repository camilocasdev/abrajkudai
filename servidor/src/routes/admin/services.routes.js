import { Router } from 'express'
import * as servicesctrl from '../../controllers/services.controller'
import { verifyToken, refreshToken, isAdminOrEmpleado, isAdmin } from '../../middlewares/authjwt'

const router = Router()

router.post('/services/create' , [ refreshToken , verifyToken , isAdminOrEmpleado ] , servicesctrl.serviceCreate )
router.get('/services/get/list' , [ refreshToken , verifyToken , isAdminOrEmpleado ] , servicesctrl.servicesList )
router.get('/services/get/:serviceId' , [ refreshToken , verifyToken , isAdminOrEmpleado ] , servicesctrl.serviceById )
router.put('/services/update/:serviceId' , [ refreshToken , verifyToken , isAdminOrEmpleado ] , servicesctrl.serviceUpdate )
router.delete('/services/delete/:serviceId' , [ refreshToken , verifyToken , isAdminOrEmpleado ] , servicesctrl.serviceDelete )

export default router;