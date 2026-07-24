import express from "express";
import testRoute from "./routes/test.route";
import authRoute from "./routes/auth.route";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "FastEats API Running 🚀",
    });
});

app.use("/api/test", testRoute);
app.use("/api/auth", authRoute);

export default app;