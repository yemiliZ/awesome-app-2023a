import { Router } from "express";
import { NFound } from "../controllers/errores.controller.js";

const router = Router();
router.use(NFound);
export default router;