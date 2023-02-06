require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const { response } = require("express");
const routerCar = require("./routes/car.route");

const app = express(); //создаем экспресс
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json()); //Работа с форматом json
app.use(express.urlencoded({ extended: true })); //Что бы мы могли передавать пармаметры в строке

app.use(express.static("public")); //Подключаем статичные файлы
app.use((err, request, response, next) => {
  //middleware - Промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

app.use("/", (req,res)=>{
    res.status(200).json("Zavod Lypa and Pypa");
});

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`); //Говорим серверу отслеживать порт и запускаем сервер
});

module.exports = app;
