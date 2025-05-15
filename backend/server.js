const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();  

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    // сервер запускается на порту из .env файла
    const PORT = process.env.PORT;
    // если сервер запустился, то запускается приложение на указанном порту
    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);
    })
    // в случае ошибки, выводим ее в консоль
}).catch(err => console.log(err));

// GET маршрут по корню сайта, в данном случае для проверки работоспособности сервера, должно вывести сообщение на экран
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend"})
})