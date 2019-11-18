const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sql = require('./models/db.js')


exports.fetch_customer = (req, res, next) => {
  app.get('/customer', function (req, res) {
    sql.query('SELECT * FROM customer', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'users list.' });
    });
  });
}


exports.fetchSp = (req, res, next) => {
  app.get('/sp', function (req, res) {
    sql.query('SELECT * FROM sp', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'users list.' });
      });
    });
};


exports.loginAdmin = (req,res,next) => {
  var username=req.body.user;
  var password=req.body.password;
  connection.query('SELECT * FROM admin WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
}


