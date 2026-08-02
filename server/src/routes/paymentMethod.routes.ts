import { Router } from "express";
import { getPaymentMethodsController, addPaymentMethodController, setDefaultPaymentMethodController, deletePaymentMethodController } from "../controllers/paymentMethod.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getPaymentMethodsController);
router.post("/", protect, addPaymentMethodController);
router.patch("/:id/default", protect, setDefaultPaymentMethodController);
router.delete("/:id", protect, deletePaymentMethodController);

export default router;