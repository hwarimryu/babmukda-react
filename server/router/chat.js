module.exports=function(server){
    const app= require('express')();
    const mysql = require('mysql');
    const dbConfig = {
        user: 'root',
        port: 3306,
        password: 'babmukda2020',
        database: 'babmukda'
    }
    const conn = mysql.createConnection(dbConfig);

    //server를 socket.io 서버로 업그레이드
    const io = require('socket.io')(server);

    let room_id = '';

    // 채팅방 열기
    // db에서 기록 가져오기
    app.get('/:room',(req,res)=>{
        my_name = "test_host";
        console.log('start chat');
        room_id = req.params.room;
        conn.query(`select * from chat_history where rid='${room_id}'`, function (err1, result1) {
            if (err1) throw err1;
            console.log(result1)
            conn.query(`select * from chat_room where id='${room_id}'`, function (err2, result2) {
                if (err2) throw err2;
                conn.query(`select * from gpitems where id='${result2[0].id}'`, function (err3, result3) {
                    if (err3) throw err3;
                    console.log(result3)
                    res.json({
                        history: result1, 
                        title: result3[0].title,
                        gpid: result3[0].id
                    })                
                })
            })
        })
    });

    app.put('/:room',(req,res)=>{
        console.log('put chat');
        conn.query('insert into chat_history values(NULL,?,?,?)', [req.params.room, req.body.writer, req.body.content], function (err) {
            if (err) console.log(err)
            res.json({success:true});
        });
    });

    // connection event handler
    io.on('connection',(socket)=>{
        console.log('chat connection info: '+socket.client);
        //client의 메세지 수신

        socket.on('chat_on',(data)=>{
            console.log('chat on');
            
            socket.emit('chat_on',data);
            
            // let msg={
            //     from:{
            //         name:socket.name,
            //         userid:socket.userid
            //     },msg:data.msg
            // }
        });
        socket.on('chat_msg',(data)=>{
            console.log(data.writer+" "+data.content);
            io.emit('chat_msg',data);
            conn.query('insert into chat_history values(NULL,?,?,?)', [room_id, data.writer, data.content],(err)=>{
                
                if (err) console.log(err)
                console.log("insert");
            });
        })

        // io.to()
        
        socket.on('chat_close',(data)=>{
            console.log(data);
            conn.query('insert into chat_history values(NULL,?,?,?)', [req.params.room, req.body.writer, req.body.content], function (err) {
                if (err) console.log(err)
                res.json({success:true});
            });
        })

    })
    return app;
}


