import express from "express";
import authRoute from "./routes/auth.route";
import userRoutes from "./routes/user.routes";
import cors from "cors";

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);

export default app;