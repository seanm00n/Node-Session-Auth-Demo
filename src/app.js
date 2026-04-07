const express = require("express");
const userRouter = require('./routes/user');

const app = express();

app.use(express.json()); //use는 뭐야 미들웨어?

app.use('/user', userRouter);

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.listen(process.env.PORT, () => { //listen은 뭐고
  console.log("Server started on port 3000");
});