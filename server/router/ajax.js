const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const router=express.Router();
//往路由器对象添加路由
 router.get('/test',(req,res)=>{
	 console.log("ajax请求接受成功");
	res.send('测试成功');
	//1.验证接口 get方法，可以在浏览器端验证
	//http://127.0.0.1:8080/ajax/test
});

router.get('/ex1',(req,res)=>{
	console.log("ajax请求接受成功");
	res.send("终于得到了正确的响应数据");
});

	
router.get('/detail',(req,res)=>{
	var $uid=req.query.uid;
	
 if(!$uid){ 
	  res.send({code:401,msg:'uid required'});
 }
 pool.query('select * from xz_user where uid=?',[$uid],(err,result)=>{
	  if (err) throw err;
		console.log(result);
		res.send(result);
 });
})


//http 原生get
router.get('/login',(req,res)=>{
 var $uname=req.query.uname;
 var $upwd=req.query.upwd;
 //mysql的操作
 
  pool.query("select * from xz_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
  if(err) throw err;
  if(result.length==0){
   res.send("0");
  }else{
   res.send("1");
  }
 })
});

//restful的get登录
//url 中要带参数变量， 
// /login_restful/${$uname}&${$upwd}
	router.get("/login_restful/:uname&:upwd",(req,res)=>{
		//获取参数变量，看见冒号params
		var  _uname=req.params.uname;
		var  _upwd=req.params.upwd;
		//res.send(_uname+"喜欢"+_upwd);
	var sql="select *from xz_user where uname=? and upwd=?"
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if (err) throw err;
		 if(result.length==0){
			res.send("0");
		 }else{
			 res.send("1")
		 }
		
	});
	});
	
	//restful的delete方法，操作和restful的get一样
	router.delete("/restful_del/:uid",(req,res)=>{
		var _uid=req.params.uid;
		var sql="delete from xz_user where uid=?"
	pool.query(sql,[_uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows==0){
			res.send("0")
		}else{
			res.send("1");
		}
	});


	});


router.delete("/restful_del1/:uid",(req,res)=>{
	var _uid=req.params.uid;
	var sql="delete from xz_user where uid=?"
	pool.query(sql,[_uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows==0){
			res.send("删除成功")
		}else{
			res.send("删除失败")
		}
	})
});
router.post("/post_login",(req,res)=>{
	var _uname=req.body.uname;
	var _upwd=req.body.upwd;
	//res.send(_uname+"......"+_upwd);
	
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if (err) throw err;
		if(result.length==0){
			res.send("登录失败");
		}else{
			res.send("登录成功")
		}
	});
});
router.get("/get",(req,res)=>{

	//var _uid=req.query.uid;
	var sql="select * from xz_user ";
	pool.query(sql,[obj],(err,result)=>{
		if (err) throw err;
	    console.log(typeof(result));
			res.send(result);
		
		
	});
});

module.exports=router;
//单机按钮 ，get方法 访问接口/ajax/ex1。响应是”终于得到了正确的响应数据 “前台，吧得到的响应数据放到div中显示ZZ