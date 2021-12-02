const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
    artist: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    members: {
        type: String,
        index: true
    },
    genre: {
        type: String,
        index: true
    }
})

const Band = mongoose.model("Band", bandSchema);
//Band.db("myFirstDatabase").collection("bands").createIndex({artist: "text", members: "text", genre: "text"});
//Band.createIndexes({artist: "text", members: "text", genre: "text"});

module.exports = Band;