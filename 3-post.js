const Koa = require('koa');
const app = new Koa();
app.use(async ctx =>{
    let data = '';
    // 监听data事件，收到表单的数据的时候就会执行
    ctx.req.on('data',chunk =>{
        data+=chunk; // chunk为二进制
    });

    ctx.req.on('end',() => {
        data = decodeURI(data); //解码
        console.log(data); //username=lisi&password=1111
    });
    ctx.body = '123'; //必须写，若不写会报错 404
});
app.listen(3000,() => {
    console.log('服务开启成功在3000端口');
});