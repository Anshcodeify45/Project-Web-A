import express from 'express'
import { userSignup,userLogin ,userData} from '../Controller/user-controller.js';

const router = express.Router();


router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/getUser',userData)

export default router;