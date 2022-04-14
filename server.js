const express = require("express")
require("dotenv").config()
const dbConnect = require("./config/dbConn")
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
dbConnect()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

const SliderRoute = require("./Routes/SliderRoutes")

app.get("/api/", (req, res) => {
    res.send("welcome to solar project")
})
app.use("/api/slider", SliderRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server has been Started on http://localhost:${process.env.PORT}/api/`);
})