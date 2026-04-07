require('dotenv').config(); // .env 파일을 읽어옵니다.
const express = require("express");
const userRouter = require('./routes/user');
const path = require('path');

const app = express();

app.use(express.json()); //use는 뭐야 미들웨어?

app.use('/user', userRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
}); // login 화면으로 리다이렉트

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));
});

app.listen(process.env.PORT, () => { //listen은 뭐고
  console.log("Server started on port 3000");
});