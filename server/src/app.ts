import express from "express";
import authRoute from "./routes/auth.route";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "FastEats API Running 🚀",
    });
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);

export default app;