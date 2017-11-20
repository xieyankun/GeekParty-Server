// 创建服务
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
    ctx.response.body = "Hello Koa!!!!";
}

const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">this is about page</a>';
}

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(4000)
console.log("Server started and listen on port 4000");