const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const router=express.Router();
//往路由器对象添加路由
//1.用户注册路由  post  /reg
router.get('/v1/login',(req,res)=>{
var  _uname=req.query.uname;
		var  _upwd=req.query.upwd;
	
		//res.send(_uname+"喜欢"+_upwd);
	var sql="select *from xz_user where uname=? and upwd=?"
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if (err) throw err;
		 if(result.length>0){
			res.send("1");
		 }else{
			 res.send("0")
		 }
	});
});

router.get("/v1/list",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
});


router.get("/v1/search",(req,res)=>{
	var _uid=req.query.uid;
	 //console.log(res.query);
	var sql="select *from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result)=>{
		if (err) throw err;
		//console.log(result);
		res.send(result);
		
	});
});

router.delete("/v1/del/:uid",(req,res)=>{
	var _uid=req.params.uid;
	var sql="delete from xz_user where uid=?";
pool.query(sql,[_uid],(err,result)=>{
	if (err) throw err;
	if (result.affectedRows==0){
		res.send("删除失败");
	}else{
		res.send("删除成功");
	}
});
});


router.put("/v1/update",(req,res)=>{
	var _uid=req.body.uid;
	var obj=req.body;
	var sql="update xz_user set ? where uid=?";
  pool.query(sql,[obj,_uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows==0){
			res.send("修改失败");
		}else{
			res.send("修改成功");
			}
	});
});






//路由器对象导出
module.exports=router;