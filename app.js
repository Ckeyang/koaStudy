/**
 * Created by Administrator on 2016/10/19 0019.
 */
'use strict';
let koa=require('koa');
const app=new koa();

let router = require('./router/router');
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;