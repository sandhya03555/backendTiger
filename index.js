const express= require('express');
let cors=require('cors');
let bodyParser=require('body-parser');
var mysql = require('mysql');
const app=express();
app.use(bodyParser())
app.use(cors())
app.get("/demo",(req,res)=>{
  console.log("Here");
})
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sweety@3298",
    database: "mydbase"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //con.query("CREATE DATABASE mydbase", function (err, result) {
      //if (err) throw err;
     // console.log("Database created");
   // });
  });
 // con.connect(function(err) {
   // if (err) throw err;
    //console.log("Connected!");
    //var sql = "CREATE TABLE customers (type VARCHAR(255),id VARCHAR(255),question VARCHAR(255),option VARCHAR(255))";
    //con.query(sql, function (err, result) {
      //if (err) throw err;
     // console.log("Table created");
    //});
  //});
  
  app.get("/",(req,res)=>{
    res.send("Hello")
  })
  app.get("/question",(req,res)=>{
    con.query("SELECT * FROM survey",function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  })
  app.post("/question",(req,res)=>{
    let question=req.body
    console.log("Question is",question)
    var sql="INSERT INTO customers (type,id,question,options) VALUES ('question1', '1','ques','yes')";
    console.log(req.body)
    con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
    });
  })
  

app.listen('3008',() =>{
    console.log('running');
})