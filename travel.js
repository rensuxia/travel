const qs=require('querystring');
const mysql=require('mysql');
//数据库连接池
var pool=mysql.createPool({
    user:'root',
    database:'travel',
    connectionLimit:5
});
module.exports={
    add:(req,res)=>{
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                conn.query('INSERT INTO t_user VALUES (NULL,?,?,?,?,?)',[obj.uname,obj.upwd,obj.sex,obj.tel,obj.email],(err,result)=>{
                    if(err) throw err;
                    if(result.affectedRows>0){
                        console.log(result);
                        res.json({code:1,msg:'添加成功',mid:result.insertId});
                        conn.release();
                    }
                })
            })
        })
    },
    login:(req,res)=>{
        //从POST请求中读取数据
        req.on('data',(buf)=>{
            var obj=qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                conn.query('SELECT * FROM t_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
                    console.log(result);
                    if(result.length>0){//查询到数据
                        var output={
                            code:1,
                            msg:'登录成功',
                            id:result[0].uid
                        };
                    }else{//未查询到数据
                        var output={
                            code:2,
                            msg:'用户名或密码错误'
                        };
                    }
                    res.json(output);//把数据转换为json字符串
                    conn.release();//释放链接
                })
            })
        })

    },
    del:(req,res)=>{
            var uid=req.query.uid;
            console.log(uid);
            pool.getConnection((err,conn)=> {
                conn.query('DELETE FROM t_user WHERE uid=?', [uid], (err, result) => {
                    console.log(result);
                    if(result.affectedRows>0){
                        res.json(result);
                        conn.release();
                    }
                })
            })
    }
};
