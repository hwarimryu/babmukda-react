const express= require('express');
const app = express();


const gpRouter=require('./servicegp')(express)
app.use('/servicegp',gpRouter);

app.get('/',(req, res)=> res.json({data:'this is index'}));
// router.get('/servicegp',(req,res)=>gpRouter);


// router.get('/servicercp',(req, res)=> res.json({data:'this is index'}));
// router.get('/mychat',(req, res)=> res.json({data:'this is index'}));
// router.get('/alarm',(req, res)=> res.json({data:'this is index'}));
// router.get('/myinfo',(req, res)=> res.json({data:'this is index'}));
 
module.exports = app;