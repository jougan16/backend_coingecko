require("dotenv").config()

const express = require("express")
const cors = require("cors")

const cryptoRoutes = require("./routes/cryptoRoutes")

const app = express()

app.use(cors())
app.use(express.json())



app.use("/api", cryptoRoutes)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})