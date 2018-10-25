const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pomodoro-waves')

mongoose.connection.once('open', () => {
    console.log ('Mongoose is now connected to MongoDb, yo!')
})

mongoose.connection.on('error', (error) => console.log(`MongoDb is trippin on somethin', It might be this: ${error}`))

module.exports = mongoose
