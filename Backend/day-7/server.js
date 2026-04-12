// cluster=>storage+processor
// database=>used for storing data
// server.js => start server + connect DB
require("dotenv").config()
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database");
const app = require("./src/app");
// call the function
connectToDb();
app.listen(3000, () => {
            console.log("Server running on port 3000");
});