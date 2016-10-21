/**
 * Created by Administrator on 2016/10/21 0021.
 */
//var koa=require('koa');
var router = require('koa-router')();
router.get('/',function*(next){
    console.log(this.url);
    this.body='heiheihei';
});
router.get('/test',function*(next){
    console.log(this.url);
    this.body='test';
});
router.get('/upload',function*(next){
    console.log(this.url);
    this.body='upload';
});
router.get('/sm',function*(next){
    console.log(this.query);
    this.body='sm';
});
module.exports = router;