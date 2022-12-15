require("dotenv").config();
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const userRouter = require("./api/users/user.router");
const crudRouter = require("./api/crud/crud.router");
const cors = require('cors');

const pool = require('./config/database')


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyparser.json());


app.use("/api/users", userRouter);
app.use("/api/crud", crudRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
