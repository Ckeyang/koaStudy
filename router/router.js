/**
 * Created by Administrator on 2016/10/21 0021.
 */
//var koa=require('koa');
var router = require('koa-router')();
router.get('/',function*(){
    this.body='heiheihei';
});
module.exports = router;