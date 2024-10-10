import express from "express";
import dotenv from "dotenv";
import connection from "./database/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoutes from "./routes/users.js";
import PublicationRoutes from "./routes/publications.js";
import FollowRoutes from "./routes/follow.js";

//configurar dotenv para usar variables de entorno
dotenv.config();

//Mensaje de bienvenida ejecuto api node
console.log("Bienvenido a la API de Node.js");

connection();

const app = express();
const puerto = process.env.PORT || 8080;

app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

//Rutas de los modulos
app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

//Parsear datos de los formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(puerto, () => {
    console.log("servidor de node ejecutandose", puerto);
});

export default app;