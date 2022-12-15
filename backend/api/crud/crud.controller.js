const pool = require('../../config/database')

  // get all data

const getUserCtrl = ( (req, res) => {

    let qr = `SELECT * FROM user INNER JOIN address ON address.id = user.id`;
  
    pool.query(qr,(err,result)=> {
        if(err) {
            console.log(err);
        }
        if (result.length>0)
        {
  res.send({
    message:'all user data',
    data: result
         });
        }
    });
  });
  
  // get single data 
  
const getUserByIdCtrl = ( (req,res)=>{
  
    let gID = req.params.id;
  
    let qr = `SELECT * FROM user INNER JOIN address ON address.id = user.id where user.id =${ gID}`;
  
    pool.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message : 'get single data',
                data : result
            })
        }
        else {
            res.send({
                message : 'data not found'
            })
        }
    })
  
  });
  
  
  // Create Data
  
const createNewUserCtrl = ( (req, res) => {
  
    // console.log(req.body, 'createdata');
  
    let fullname = req.body.name;
    let email = req.body.email;
    let mb = req.body.mobile;
    let city = req.body.city;
    let state = req.body.state;
    let qr = `insert into user(name, email, mobile) 
                values('${fullname}', '${email}', '${mb}')`;
  
    pool.query(qr,(err,result) => {
        if(err){
            console.log(err);
            res.send({
                err : err ,
                msg : "error in first query"
            })
        }
        // console.log(result, 'result');
        id = result.insertId;
        pool.query("INSERT INTO address( city, state, id) VALUES ?" , [[[ city , state , id ]]] , (err ,result)=>{
            if(err)
            {
                res.send({
                    message: 'failed to add',
                    err  : err
                })
        
            }else{
                res.send({
                    message: 'data inserted'
                })
        
            }
        })
    });
  
  });
  
  
  
  // Update Data
  
const updateUserCtrl = ( (req,res)=>{
  
    // console.log(req.body, 'updatedata');
  
    let gID = req.params.id;
    let fullname = req.body.name;
    let email = req.body.email;
    let mb = req.body.mobile;
    let state = req.body.state;
    let city = req.body.city;
  
  
    let qr = `UPDATE address SET city='${city}',state='${state}' WHERE id = ${  gID }`;
  
  console.log(qr);
    pool.query(qr, (err, result) => {
        if(err) {
            // console.log("inside ");
            res.send({
                message : "error1",
                err  : err
            })
        }else{
  
  
            let qr = `update user set name = '${fullname}', email = '${email}', mobile = '${mb}' where id = ${gID}`;
  
  
            pool.query(qr, (err, result) => {
                if(err) {
                    // console.log("outside ");
                    res.send({
                        message : "error2",
                        err  : err
                    })
                }else
                {
                    res.send({
                        message : 'data updated'
                    });
    
                }
            });
        }
    });
  })
  
  
  // Delete Data.
  
  
const deleteUserCtrl = ( (req, res) => {
    
    let qID = req.params.id;
  
    let qr = `delete from address where id = '${qID}'`;
    pool.query(qr,(err,result) => {
        if(err) {
            // console.log("outside");
            res.send({
                message : 'data deleting failed',
                err: err
            })
        }else{
            
    let qr = `delete from user where id = '${qID}'`;
            pool.query(qr,(err,result) => {
                if(err) {
                    // console.log("inside");
                    res.send({
                        message : 'data deleting failed',
                        err: err
                    })
                }
        
                res.send({
                    message : 'data deleted'
                })
        
        
            })
        }
  
    
  
    })
  
  
  });



  module.exports = { getUserCtrl, getUserByIdCtrl, createNewUserCtrl, updateUserCtrl, deleteUserCtrl }
  