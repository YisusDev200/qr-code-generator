import express from "express";
const Router = express.Router();

import { createQrCode, getHome } from "../controllers/qr-code.controllers.js";

Router.post("/", createQrCode);
Router.get("/", getHome);

export default Router;
