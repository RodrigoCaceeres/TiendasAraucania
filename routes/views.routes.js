import { Router } from "express";
import { homeView } from "../controllers/view.controller.js"

export const router = Router();

router.get("/", homeView);


export default router;  