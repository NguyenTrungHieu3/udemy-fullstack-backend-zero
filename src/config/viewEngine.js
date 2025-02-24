const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    app.set('views', path.join('./src','views')) // thư mục chứa file view
    app.set('view engine','ejs'); // dùng ejs
    
    // config static file 
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;