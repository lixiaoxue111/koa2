const Koa = require('koa');
const app = new Koa();
app.use(async ctx=>{
    if(ctx.url === '/newfu'){
        ctx.cookies.set(
            'name','newfu',{
                domain:'localhost',
                path:'/newfu',
                maxAge:24 * 60 * 60 * 1000,
                expires:new Date('2019-01-20'),//失效时间
                httpOnly:false,
                overwrite:false            }

        );
        ctx.body = 'set cookie succuce'
    }else {
        ctx.body = 'fail'
    }
});

app.listen(3000,()=>{
    console.log('服务开启成功：3000')
});