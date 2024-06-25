import { Router } from "express";
import { validateJWT } from "../middlewares/jwt-validator";
import { getCarreras } from "../controllers/carrera.controller";

const router = Router();

router.get('/', [validateJWT], getCarreras)

export default router;