const mariadb = require('mariadb');
const express = require("express");

const pool = mariadb.createPool({
    host: 'db',
    database: 'db', 
    user:'thib', 
    password: 'thib',
    connectionLimit: 5
});

exports.createUser = async (req, res) => {
    let conn
    conn = await pool.getConnection();
    var query = "SELECT `username` FROM `users` WHERE `username` = '" + req.body.username + "'";
    var rows = await conn.query(query);
    if (rows[0] != undefined) {
        conn.end()
        res.status(400).json({err:"user already exists"})
        res.send()
    } else {
        query = "INSERT INTO `users` (username, password) VALUES ('" + req.body.username + "','" + req.body.pass + "')";
        rows = await conn.query(query);
        conn.end();
        res.status(200).json({err:"registered"})
        res.send()
    }
}

exports.login = async (req, res) => {
    let conn
    conn = await pool.getConnection();
    var query = "SELECT `username`, `password` FROM `users` WHERE `username` = '" + req.body.username + "'";
    var row = await conn.query(query);
    conn.end()
    if (row[0] == undefined) {
        console.log('no username')
        res.status(400).json({error: 'no username matching'})
        res.send()
        return;
    }
    else if (row[0].password == req.body.pass) {
        console.log('good')
        res.status(200).json({username:req.body.user, pass:req.body.pass})
        res.send()
        return;
    }
    else {
        console.log('wrong pass')
        res.status(400).json({error: 'password is not matching'})
        res.send()
        return;
    }
}