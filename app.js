import express from "express";
import expressFileUpload from "express-fileupload";
import bodyParser from "body-parser";
import { create } from "express-handlebars";
import path from "path";

import { fileURLToPath } from "url";
import  viewRoutes  from "./routes/views.routes.js";;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const app = express();

//CONFIGURACIÓN DE HANDLEBARS
const hbs = create({
  partialsDir: ["views/partials/"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/axios/dist"));

app.use(
  expressFileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    aboortOnLimit: true,
    responseOnLimit:
      "El tamaño de la foto de perfil supera el límite permitido (5mb)",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//RUTAS
app.use(viewRoutes); 