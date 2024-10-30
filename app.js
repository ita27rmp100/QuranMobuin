const express = require('express')
const qs = require('querystring') , mysql = require('mysql')
const app = express() , PORT = 3001

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'QuranMoubin'
})

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})


app.post('/',(req,res)=>{
    let body = ''
    req.on('data',(data)=>{
        body = body + data
    })
    req.on('end',()=>{
        let surah = (qs.parse(body)).surah
        connection.query(`update suowarID set viewers = viewers + 1 where id = '${surah}';`,function(error,results,fields) {
        })
    })
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})