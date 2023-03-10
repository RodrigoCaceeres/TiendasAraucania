import pool from "./db/db.js";
import { app } from "./app.js";

const main = async () => {
    try {
      await pool.connect();
      console.log("Conectado a la base de datos...");
      app.listen(8000, () => {
        console.log("Servidor Local escuchando en http://localhost:8000");
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  main();