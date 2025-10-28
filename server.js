const express = require('express')
const session = require('express-session')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const appRoute = require('./routes/route')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayout)
app.use(express.json())
app.use(session({secret: 'secret-key', resave: true, saveUninitialized: true}))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(appRoute)

// untuk handle saat user mengakses url yg tidak tersedia
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})