import express from 'express';
import userControl from '../controller/usercontroller.js'
const router = express();
router.use(express.json());
router.post('/signup',userControl.signup)
router.post('/login',userControl.login)


export default router