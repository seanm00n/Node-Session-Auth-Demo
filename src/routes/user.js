const express = require('express');
const path = require('path');
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
        res.send(`singup complete, ${username}`);
    });
    
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    const sql = "SELECT * from users WHERE `username`=?"; //password 가져와야함
    db.query(sql, [username], (err, results) =>{
        if(err){
            console.log(err);
            return res.status(500).send("server error");
        }
        if(results.length > 0){
            const user = results[0];
            if(user.password === password){
                req.session.userId = user.id;
                req.session.username = user.username;

                res.status(200).json({ 
                    success: true, 
                    code: "LOGIN_SUCCESS", 
                    message: `login success, ${username}` 
                });
            }else{
                res.status(401).send("invalid password");
            }
        }else{
            res.status(401).send("username not exist");
        }
    });
});

router.post("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("세션 삭제 에러: ", err);
            res.status(500).send("로그아웃 실패");
        }

        res.clearCookie('connect.sid');

        res.status(200).json({
            success: true,
            code: "LOGOUT_SUCCESS",
            message: "logout success"});
    });
});

module.exports = router;