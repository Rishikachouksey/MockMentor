import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    return
    res.status(200).json({
        success: true,
        message: "Server started"
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();

})