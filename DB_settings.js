let surahID = ''
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'QuranMoubin'
})
for (let i = 1; i<=114; i++) {
    if (i<10) {
        surahID = `00${i}`
    }else if(i<100 && i>=10) {
        surahID = `0${i}`
    }else{surahID = `${i}`}
    connection.query(`INSERT INTO suowarID VALUES('${surahID}',0);`,function(error,results,fields) {
    })
}
connection.end()