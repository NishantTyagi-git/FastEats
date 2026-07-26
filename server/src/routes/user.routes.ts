import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { getCurrentUserController, updateProfileController } from "../controllers/user.controller";

const router = Router();

router.get("/me", protect, getCurrentUserController);
router.patch("/profile", protect, updateProfileController);

export default router;