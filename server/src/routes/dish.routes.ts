import { Router } from "express";

import { getDishes, getDishBySlug, getCategories, getPopularDishes } from "../controllers/dish.controller";

const router = Router();

router.get("/", getDishes);
router.get("/categories", getCategories);
router.get("/popular", getPopularDishes);
router.get("/:slug", getDishBySlug);

export default router;