import express from "express";
import mongoose from "mongoose";
import config from "config";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import logger from "./modules/logger.js";
import authRouter from './api/auth/authRouter.js'
import createRoles from "./modules/createRoles.js"
import { ADMIN } from "./roles_list.js"

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swaggerOptions.js"

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();

app.use(express.json())
app.use("/auth", authRouter)

app.use("/uploads", express.static("uploads"));
app.use("/file", express.static("file"));

app.use("/img", express.static("./img/"));

app.use("/3d-gallery", express.static("./projects/demo_3d_gallery/dist/"));
app.get("/3d-gallery", (req, res) => {
  res.sendFile(path.resolve(__dirname, "projects", "demo_3d_gallery", "dist", "index.html"));
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = config.get("port") || 4000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    // Создание ролей пользователей в БД
    createRoles([ADMIN]);

    app.listen(PORT, () =>
      logger.info(`Запуск сервера порт: ${PORT}`)
    );
    
  } catch (err) {
    console.log("Ошибка запуска сервера.", err.message);
    logger.error(`Ошибка запуска сервера. ${err.message}`);
    process.exit(1);
  }
}

start();