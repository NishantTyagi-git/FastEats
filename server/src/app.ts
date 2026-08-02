import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route";
import userRoutes from "./routes/user.routes";
import dishRoutes from "./routes/dish.routes";
import cartRoutes from "./routes/cart.routes";
import contactRoutes from "./routes/contact.route";
import wishlistRoutes from "./routes/wishlist.routes";
import addressRoutes from "./routes/address.routes";
import paymentMethodRoutes from "./routes/paymentMethod.routes";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "FastEats API Running 🚀",
    });
});

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(cookieParser());

app.use("/api/wishlist", wishlistRoutes);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/payment-methods", paymentMethodRoutes);

export default app;