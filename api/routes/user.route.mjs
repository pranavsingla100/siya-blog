import express from "express";
import { test } from "../models/user.controller.mjs";

const router = express.Router();

router.get('/test', test)

export default router;