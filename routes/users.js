import express from "express";
const router = express.Router();

import { signin, signup, adminSignin, adminSignup } from '../controllers/user.js';

router.post("/signin", signin);
router.post("/signup", signup);
router.post('/adminsignin', adminSignin); 
router.post('/adminsignup', adminSignup); 

export default router;
