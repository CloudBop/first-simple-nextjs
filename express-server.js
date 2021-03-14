// A custom server can not be deployed on Vercel, the platform Next.js was made for.

// Before deciding to use a custom server please keep in mind that it should only be used when the integrated router of Next.js can't meet your app requirements. A custom server will remove important performance optimizations, like serverless functions and Automatic Static Optimization.

// server.js doesn't go through babel or webpack. Make sure the syntax and sources this file requires are compatible with the current node version you are running.


// server.js
const express = require("express")
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  //
  const server = express()

  //
  server.get("/p/:id", (req,res)=>{
    console.log("req.params",req.params)
    app.render(req, res, "/post", req.params)
  })

  //
  server.get("*", (req,res)=>{
    return handle(req,res);
  })

  //
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})


/*  
createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if(pathname==="/chicken") {
      app.render(req,res,'/contact',query);
    }else {
      handle(req, res, parsedUrl)
    }

    // if (pathname === '/a') {
    //   app.render(req, res, '/a', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/b', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
*/