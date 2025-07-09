import express from 'express';
import greetRouter from './routers/routersGreet.js';
import {routerAdd,routerUsers} from './routers/routerUsers.js';
const app = express();
app.use(express.json());
app.use("/greet", greetRouter);
app.use("/users", routerUsers);
app.post("/users", routerAdd);

app.listen(3001, () => {
    console.log('server running in port 3001');
});
