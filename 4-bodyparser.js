const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyparser()); //自动解析post传过来的参数  转为对象格式
app.use(async ctx => {
    let data = ctx.request.body;
    ctx.body = data;  //{"username":"lisi","password":"zzz"}
});
app.listen(3000,() => {
    console.log("服务开启成功，在3000端口");
});