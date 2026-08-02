import { Router } from "express";

import { getAddressesController, addAddressController, updateAddressController, deleteAddressController, setDefaultAddressController } from "../controllers/address.controller";

import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getAddressesController);
router.post("/", protect, addAddressController);
router.patch("/:addressId", protect, updateAddressController);
router.delete("/:addressId", protect, deleteAddressController);
router.patch("/:addressId/default", protect, setDefaultAddressController);

export default router;