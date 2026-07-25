import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { getCurrentUserController } from "../controllers/user.controller";

const router = Router();

router.get("/me", protect, getCurrentUserController);

export default router;