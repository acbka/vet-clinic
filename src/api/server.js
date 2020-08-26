const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors');

app.use(cors());

app.get('/specs',  (req, res) => {
    
   const con = mysql.createConnection({
      host: "db4free.net",
      user: "vetnzadmin",
      password: "mumia2020",
      database: "vetnzdb"
   });
  
   con.connect(err => {
      if (err) {
         throw err;
      };
      con.query("SELECT * FROM vetnzdb.DocSpecs", (err, result, fields) => {
         if (err) 
         {
            res.json({error:'connection error'});
         }
         console.log(result);
         res.json(result);
      });
   });
});

var server = app.listen(8081,  () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});