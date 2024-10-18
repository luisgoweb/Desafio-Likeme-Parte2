import express from 'express'
import config from '../config.js';
import cors from 'cors'
import morgan from 'morgan';
import router from './routes/likeme.routes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = config.PORT

//Setting
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
//Middlewares
app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.json());


//Route
app.use("/posts", router);
