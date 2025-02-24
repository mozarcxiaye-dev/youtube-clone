import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

// import dotenv from "dotenv";

import express from "express"
const app = express()

// dotenv.config()
app.use(express.json());
connectDB()



// ( async () => {
//     try{
//         console.log("MONGODB_URI:", process.env.MONGODB_URI);

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log("ERRR:", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })
//     }catch (error) {
//         console.log("ERROR: ", error)
//         throw error
//     }

// })()