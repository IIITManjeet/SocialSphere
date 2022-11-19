const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js")
const authRoute = require("./routes/auth.js")
const postRoute=require("./routes/posts.js")

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
 console.log("connected to MongoDB")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
 console.log("Backend server is running")
})