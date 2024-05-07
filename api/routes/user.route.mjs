import express from "express";
import { test, updateUser, deleteUser, signOut, getUsers, getUser } from "../controllers/user.controller.mjs";
import { verifyToken } from "../utils/verifyUser.mjs";

const router = express.Router();

router.get('/test', test)//checked
router.put('/update/:userId', verifyToken, updateUser);//checked
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signOut);
router.get('/get-users', verifyToken, getUsers);//checked - isadmin must be true
router.get('/:userId', getUser);//checked

export default router;