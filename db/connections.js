require('dotenv').config()
const mongoose = require('mongoose')

// connecting to the database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
mongoose.connect('mongodb://localhost/pomodoro-waves')
}

mongoose.connection.once('open', () => {
    console.log ('Mongoose is now connected to MongoDb, yo!')
})

mongoose.connection.on('error', (error) => console.log(`MongoDb is trippin on somethin', It might be this: ${error}`))

module.exports = mongoose
