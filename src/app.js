require('dotenv').config(); // .env 파일을 읽어옵니다.
const express = require("express");
const userRouter = require('./routes/user');
const path = require('path');
const session = require("express-session");

const app = express();

app.use(express.json()); //use는 req에 대한 전처리 과정과 같음.

app.use(session({
  secret: process.env.DB_SKEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));

app.use('/user', userRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
}); // login 화면으로 리다이렉트

app.get("/dashboard", (req, res) => {
  // 세션 ID가 메모리에 있는지 확인 후 없으면 로그인 페이지로 리다이렉트
  if(req.session.userId){
    req.session
    res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));
  }else{
      res.redirect('/');
  }
});

app.listen(process.env.PORT, () => { //listen은 뭐고
  console.log("Server started on port 3000");
});