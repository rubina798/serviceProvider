const sql = require('./modals/db.js');

exports.customer_update = (req, res, next) => {
  let sql = "UPDATE customer SET longitude='"+req.body.long+"', latitude='"+req.body.lat+"' WHERE product_id="+req.params.customerId;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });  
};


exports.loginCustomer = (req,res,next) => {
  var username=req.body.user;
  var password=req.body.password;
  connection.query('SELECT * FROM customer WHERE email = ?',[email], function (error, results, fields) {
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

