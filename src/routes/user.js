const express = require('express');
const router = express.Router(); // 라우터 객체 생성
const db = require('../config/db');

router.post("/signup", (req, res) => {
    const { username, password } = req.body;
    
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    db.query(sql, [username, password], (err, result) =>{
        if(err){
            console.error("error: ", err);
            return res.status(500).send("failed to signup");
        }
        console.log("signup success: ",result);
        res.send(`singup complete, ${username}`); //왜 여기는 ` ` 이거야?
    });
    
});

router.post("/login", (req, res) => {
    const { username, password } = req.body; // 이게 무슨 문법?
    
    const sql = "SELECT * from users WHERE `username`=?"; //password 가져와야함
    db.query(sql, [username], (err, results) =>{
        if(err){
            console.log(err);
            return res.status(500).send("server error");
        }
        if(results.length > 0){
            const user = results[0];
            if(user.password === password){
                res.send(`login success, ${username}`);
            }else{
                res.status(401).send("invalid password");
            }
        }else{
            res.status(401).send("username not exist");
        }
    });
});

module.exports = router;