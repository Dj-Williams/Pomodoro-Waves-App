const express = require('express')
const app = express()

const routes = require('./routes/index')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Yo! Your server is actually listening to you on PORT: ${PORT}`)
})