const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser=require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    return res.json("from backend side");

})
//to connect to the mySql data base...

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});


app.post('/FoodItem', (req, res)=>{
    const sql ="INSERT INTO `fooditem`(`name`, `description`, `price`, `category`) VALUES (?,?,?,?)";
    const values=[
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.category
    ]

    connection.query(sql,values, (err, result)=>{
        if(err) return res.json(err);
        console.log(result);
        res.send(result);
    })
    

})



app.listen(8081, ()=>{
    console.log("server is running at localhost/8081");
})