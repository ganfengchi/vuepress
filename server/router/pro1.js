const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const router=express.Router();
//往路由器对象添加路由
//1.用户注册路由  post  /reg
router.get("/v1/login/:uname&:upwd",(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	var sql="select *from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		 if (err) throw err;
		 if(result.length>0){
			 res.send("1");
		 }else{
			 res.send("0")
		 }
	});
});
//用户查询表
router.get("/v1/list",(req,res)=>{
	var  sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
	
});
//用户删除
router.delete("/v1/del/:uid",(req,res)=>{
	var _uid=req.params.uid;
	var sql="delete from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows==1){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

router.get('/v1/search/:uid',(req,res)=>{
	var _uid=req.params.uid;
var  sql="select * from xz_user where uid=?";	
pool.query(sql,[_uid],(err,result)=>{
	if (err) throw err;
	 if(result.length>0){
		 res.send(result);
	 }else{
		 res.send("0");
	 }
 });
});
//路由器对象导出
//用户修改表
router.put("/v1/update",(req,res)=>{
	var _uid=req.body.uid;
	var obj=req.body;
	var sql="update xz_user set ? where uid=?";
  pool.query(sql,[obj,_uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows==0){
			res.send("0");
		}else{
			res.send("1");
			}
	});
});


// 验证用户名重复
//http://127.0.0.1:8080/pro1/v1/reg/
router.get("/v1/regN/:uname",(req,res)=>{
	var _uname=req.params.uname;
	console.log(_uname  + "2131322133213212121");
	var sql="select * from xz_user where uname=?";
	pool.query(sql,[_uname],(err,result)=>{
		if (err)  throw err;
		console.log(result);
		if(result.length==0){
			res.send("0");
		}else{
			res.send("1");
		}
	});
})
//注册接口
router.post("/v1/regT",(req,res)=>{
	var obj=req.body;
	var sql="insert into xz_user set ?"
    pool.query(sql,[obj],(err,result)=>{
	if (err) throw err;
	if(result.affectedRows=1){
		res.send("1");
	}else{
		res.send("0");
	}
	console.log(result);
});
});

router.get("/v2/login/:uname&:upwd",(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	var sql="select *from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		 if (err) throw err;
		 if(result.length>0){
			 res.send("1");
		 }else{
			 res.send("0")
		 }
	});
});

module.exports=router;
