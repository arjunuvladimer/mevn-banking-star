const dbConfig = require("../config/db.config")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.mongoUrl = dbConfig.mongoURl

// Database Name
db.banking = require("./banking.model")(mongoose)

module.exports = db

