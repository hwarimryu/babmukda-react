module.exports=function(conn){
    const express= require('express');
    const app = express();



    /*login */
    app.post('/login',function (req, res){
        console.log(req.url+ " method: "+req.method+" req.body: "+ req.body);
        // 데이터 타입 검사
        if(typeof req.body.password !="string"){
            return res.status(401).json({
                error:"Password is not string",
                code:1
            });
        }

        
        const userId= req.body.id;
        conn.query('select * from member where userid=?',userId,(err,result)=>{
            console.log(result);
            // console.log(err)
            // res.json({result: result});
            if(err) throw err;
            if(!result){
                return res.status(401).json({
                    error:"no member",
                    code: 2
                })
            }
            if(req.body.password==result[0].password){
                console.log(req.session.id)
                let session = req.session;
                session.loginInfo={
                    _id: result[0].id,
                    username: result[0].name
                };
                return res.json({success:true});
            }else{
                return res.status(401).json({error:"password incorrect"});
            }
            
        })
    });

// /*세션데이터를 삭제 & 로그아웃*/
//     app.get('/logout',function(req,res){
//     // delete req.session.userId
//         if(req.session.userId){
//             req.session.destroy(function(err){
//                 if(err){
//                     console.log(err)
//                 }else{
//                     res.redirect('/')
//                 }
//              })
//         }
//         res.redirect('/')
//     })
return app;
}