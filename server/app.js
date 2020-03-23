//*** express웹 서버 생성
// express, body-parser를 로딩
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./router/index');
const cors = require('cors');

// app.use 통해서 bodyParser랑 '/api'처리해준다.
app.use(cors());
app.use(bodyParser.json())
app.use('/api',api);


const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Server Running at ${port}`);
});

// app.use(express.urlencoded({ extended: true }))

// // db연결
// var mysql = require('mysql');
// var dbConfig = {
//     user: 'root',
//     port: 3306,
//     password: '1234',
//     database: 'o2'
// }
// var conn = mysql.createConnection(dbConfig);

// //login, session
// var session = require('express-session')
// var MySQLStore = require('express-mysql-session')(session)
// var sessionStore = new MySQLStore(dbConfig)
// app.use(session({
//     secret: '!@#$%babmukdasession',//쿠키 임의 변조 값.
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore
// }))


// //폴더 사용
// path = require('path');
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/css'));
// app.use(express.static(__dirname + '/img'));

// //사진
// app.use('/img', express.static(path.join(__dirname, 'img')));

// //라우팅:공구/레시피/채팅
// var router=require('./router/main')(app,conn)//라우터모듈인 main.js 를 불러와서 app 에 전달
// var gpRouter = require('./router/servicegp')(express,conn)
// var rcpRouter = require('./router/servicercp')(express,conn)
// var myInfoRouter = require('./router/myinfo')(app,conn)
// var chatRouter = require('./router/chat')(app,server,conn)

// // app.set('views',__dirname+'/views')//서버가 html을 읽을수 있도고 html위치를 정의
// // app.set('view engine','ejs')
// // app.engine('html',require('ejs').renderFile)//서버가 html렌더링 할 때 ejs엔진 사용하도록 설정함.

// app.use('/servicegp', gpRouter)
// app.use('/servicercp', rcpRouter)

