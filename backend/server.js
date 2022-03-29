const appp = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
const app = require("./app");

// Configuration
dotenv.config({path:"backend/config/config.env"});

// Database Conntection
connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`server running: localhost-> ${process.env.PORT}`)
});