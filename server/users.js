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
        res.status(400)
        return;
    } else {
        query = "INSERT INTO `users` (username, password) VALUES ('" + req.body.username + "','" + req.body.pass + "')";
        rows = await conn.query(query);
        conn.end();
        res.status(200)
        return;
    }
}

exports.login = async (req, res) => {
    let conn
    conn = await pool.getConnection();
    var query = "SELECT `username` `password` FROM `users` WHERE `username` = '" + req.body.username + "'";
    var row = await conn.query(query);
    conn.end
    if (row[0] == undefined) {
        console.log('no username')
        res.status(400)
        return;
    }
    else if (row[0].password == req.body.pass) {
        console.log('good')
        res.status(200)
        res.redirect('http://localhost/home')
        return;
    }
    else {
        console.log('wrong pass')
        res.status(400)
        return;
    }
}