import { Router } from "express";

import { createContactController } from "../controllers/contact.controller";

const router = Router();

router.post("/", createContactController);

export default router;