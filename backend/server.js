import express from "express"
import app from "./app.js"
import dotenv from "dotenv"

// Config
dotenv.config({ path: "backend/config/config.env" })

const port = process.env.PORT
app.listen(port, () => console.log(`your server is listen on port ${port}`))
