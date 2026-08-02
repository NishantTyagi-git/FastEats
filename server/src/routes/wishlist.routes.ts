import { Router } from "express";
import { getWishlistController, addToWishlistController, removeFromWishlistController } from "../controllers/wishlist.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getWishlistController);
router.post("/", protect, addToWishlistController);
router.delete("/:dishId", protect, removeFromWishlistController);

export default router;