import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route";
import userRoutes from "./routes/user.routes";
import dishRoutes from "./routes/dish.routes";

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/dishes", dishRoutes);

export default app;