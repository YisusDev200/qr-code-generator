import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import qrCodeRoutes from "./routes/qr-code.routes.js";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/qr-code", qrCodeRoutes);
app.set("views", join(__dirname, "public/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/qr-code");
});

app.get("*", (req, res) => {
  res.status(404).send("Pague Not found");
});

app.listen(3000, () => console.log("Server running on port 3000"));
