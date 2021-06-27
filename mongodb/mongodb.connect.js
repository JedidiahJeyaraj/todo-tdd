const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://jedi:qwertywelcome@cluster0.nlkux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.error("error connecting to mongo db");
        console.error(err);
    }
}

module.exports = { connect };