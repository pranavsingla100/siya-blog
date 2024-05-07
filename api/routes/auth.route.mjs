import express from 'express';
import { signin, signup, google } from '../controllers/auth.controller.mjs';

const router = express.Router();
//all done
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);//except

export default router;