const mongoose = require('mongoose')


//title, releaseYear, mpaaRating, and cast.
const movieSchema = new mongoose.Schema({
    title: { type: String, require: true },
    releaseYear: { type: Number, require: true },
    mpaaRating: { type: String, require: true },
    cast:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Performer'}]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie