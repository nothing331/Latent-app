import express from "express";
import v1Router from "./router/v1/index";
const app = express();
app.use(express.json());
const PORT = 8080;

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT} on http://localhost:${PORT}`);
});
