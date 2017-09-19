/**
 * Created by zyb on 2017/9/19.
 */

import React from 'react';
// 使用 `renderToString` 将组件渲染的结果转为 HTML 字符串
import { renderToString } from 'react-dom/server';
// `match` 可以确保在路由异步操作完成后执行回调函数
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';

var express = require('express')
var path = require('path')

var compression = require('compression')

var app = express()

// 必须写在最前面（放在 var app = express() 语句后面就行）
app.use(compression())


// 通过 Express 托管静态资源，比如 index.css
// 访问静态资源文件时，express.static 中间件会根据目录查找所需的文件
// 添加 path.join
app.use(express.static(path.join(__dirname, 'public')))

// ...
app.get('*', function (req, res) {
    // 在中间添加 'public' 路径
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('*', (req, res) => {
    // 匹配路由到 URL
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            // 路由匹配过程中发生错误时，发送错误信息
            res.status(500).send(err.message)
        } else if (redirect) {
            // 我们还没说到路由钩子 `onEnter`，但在用户进入路由前可以进行跳转操作
            // 这里我们跳转到服务器进行处理
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // 如果我们获取到 props 然后匹配到一条路由，说明可以进行 render 了
            const appHtml = renderToString(<RouterContext {...props}/>)
            res.send(renderPage(appHtml))
        } else {
            // 没有错误，也没有跳转，什么都匹配不到的情况下
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml) {
    // 将 HTML 放到 es6 模版字符串``中，${appHtml} 占位符将 `appHtml`的值插进来
    return `
        <!doctype html public="storage">
        <html>
        <meta charset="utf-8"/>
        <title>My First React Router App</title>
        <link rel="stylesheet" href="/index.css">
        <div id="app">${appHtml}</div>
        <script src="/bundle.js"></script>
        `
}

// 启动服务器
var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})

