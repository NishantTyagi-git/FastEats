import express from "express";
import testRoute from "./routes/test.route";

const app = express();

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "FastEats API Running 🚀",
  });
});

app.use("/api/test", testRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});