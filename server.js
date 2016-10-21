/**
 * Created by Administrator on 2016/10/20 0020.
 */
var app=require('./app');
var server=app.listen(3000);
server.on('errer',function(err){
    console.log(err);
});
server.on('listening',function(){
   console.log('启动了！')
});
