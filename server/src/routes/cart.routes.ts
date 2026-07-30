import { Router } from "express";

import { getCartController, addToCartController, updateCartItemController, removeFromCartController, clearCartController } from "../controllers/cart.controller";

import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getCartController);
router.post("/", protect, addToCartController);
router.patch("/:dishId", protect, updateCartItemController);
router.delete("/:dishId", protect, removeFromCartController);
router.delete("/", protect, clearCartController);

export default router;