import express from "express";
import testRoute from "./routes/test.route";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "FastEats API Running 🚀",
    });
});

app.use("/api/test", testRoute);

export default app;