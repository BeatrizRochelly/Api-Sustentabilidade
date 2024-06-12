//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 4001;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
