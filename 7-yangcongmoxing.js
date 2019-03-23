const Koa = require('koa');
const app = new Koa();
// Middleware 0
app.use((ctx,next) => {
    console.log('0-1');
    next();
    console.log('0-2');
});

// Middleware 1
app.use((ctx,next) => {
    console.log('1-1');
    next();
    console.log('1-2');
});

// Middleware 2
app.use(async(ctx, next) => {
    console.log('2-1');
    await next(); //异步空间，等同步执行完再执行
    console.log('2-2')
});

// Middleware 3
app.use(async(ctx, next) => {
    console.log('3-1');
    await next(); //异步空间，等同步执行完再执行
    console.log('3-2')
});

// Middleware 4
app.use((ctx,next) => {
    console.log('4-1');
    ctx.body = '4-1';
    console.log('4-2');
    next();
    ctx.status = 201;
    console.log('4-3');
});

// Middleware 5
app.use((ctx) => {
    console.log('5-1');
    ctx.body = '5-1';
    console.log('5-2');
});

// Middleware 6
app.use((ctx) => {
    console.log('6-1');
    ctx.body = '6-1';
    console.log('6-2');
});

app.listen(3000, () => console.log('listening on 3000'));
/*
  0-1 -> 1-1 -> 2-1 -> 3-1 -> 4-1 -> 4-2 -> 5-1 -> 5-2
  4-3 -> 1-2 -> 0-2 -> 3-2 -> 2-2
  0-1 -> 1-1 -> 2-1 -> 3-1 -> 4-1 -> 4-2 -> 5-1 -> 5-2
  4-3 -> 1-2 -> 0-2 -> 3-2 -> 2-2
*/