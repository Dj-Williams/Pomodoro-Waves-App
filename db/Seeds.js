const User = require('../models/User')
const Wave = require('../models/Wave')
const Song = require('../models/Song')
const mongoose = require('./connections')
// ↑ Boilerplate Seeds Code! ↑


// ↓ Song Seed Data ↓  
const elec1 = new Song({
    song_Name: "Resonance",
    artist_Name: "HOME",
    album_Name: "Odyssey",
    songAudioURL: "https://www.youtube.com/watch?v=8GW6sLrK40k"
})

const elec2 = new Song({
    song_Name: "Paradise",
    artist_Name: "Voyage",
    album_Name: "N/A",
    songAudioURL: "https://www.youtube.com/watch?v=p_wcC1l1cLk"
})

const elec3 = new Song({
    song_Name: "Pyxis",
    artist_Name: "HOME",
    album_Name: "Before The Night",
    songAudioURL: "https://www.youtube.com/watch?v=3Ax6jTZlu_g"
})
// ↑ Song Seed Data ↑

// ↓ Wave Seed Data. ↓
const wave1 = new Wave({
    wave_Name: "Electro Wave",
    backgroundImg: "https://i.gifer.com/1RW2.gif",
    description: "Neon Lamborginis, Palm Trees, and Flamingos. All the Retro 80's sauce you could ever ask for.",
    Songs: [elec1, elec2, elec3]
})
// ↑ Wave Seed Data ↑

// ↓ User Seed Data. ↓
const Dj = new User({
    username: "Le Wet Boi",
    password: "Slicky",
    favGenre: "Hip-hop",
    Age: "26",
    profilePic: "http://andrewwendel.com/wp-content/uploads/2017/06/DOLPHIN-e1498068222504.jpg",
    waves: [wave1]
})
// ↑ Wave Seed Data ↑


User.remove({})
    .then(() => Wave.remove({}))
    .then(() => Song.remove({}))
    .then(() => Wave.insertMany([wave1]))
    .then(() => Song.insertMany([elec1, elec2, elec3]))
    .then(() => Dj.save())
    .then(() => console.log("Yo! The Database has successfully been seeded!"))
    .then(() => mongoose.connection.close())







