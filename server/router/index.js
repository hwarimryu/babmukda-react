const express= require('express');
const app = express();

// // db연결
var mysql = require('mysql');
var dbConfig = {
    user: 'root',
    port: 3306,
    password: 'babmukda2020',
    database: 'babmukda'
}
var conn = mysql.createConnection(dbConfig);

// //login, session
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore(dbConfig);
app.use(session({
    secret:'!@#$%babmukdasession',//쿠키 임의 변조 값.
    resave: false,
    saveUninitialized:true,
    store: sessionStore
}))


app.get('/', function(req, res) {
    //첫 페이지 로그인 여부 확인.
    console.log(req.url)
    console.log(req.session.userId)

    if (req.session.userId){
        res.json({isLogedIn: true});
    }else{
        res.json({isLogedIn: false});
    }
});



const mainRouter = require('./auth')(conn);
app.use('/auth',mainRouter);
const gpRouter=require('./servicegp')(express);
app.use('/servicegp',gpRouter);
const rcpRouter=require('./servicercp')(express);
app.use('/servicercp',rcpRouter);
// app.get('/',(req, res)=> res.json({data:'this is index'}));
// router.get('/servicegp',(req,res)=>gpRouter);


// router.get('/servicercp',(req, res)=> res.json({data:'this is index'}));
// router.get('/mychat',(req, res)=> res.json({data:'this is index'}));
// router.get('/alarm',(req, res)=> res.json({data:'this is index'}));
// router.get('/myinfo',(req, res)=> res.json({data:'this is index'}));
 
module.exports = app;