const express = require('express');
const userRouter = require('./routes/user');
const {connectMongoDB} = require("./connect");
const {logReqRes} = require('./middlewares');

const app = express();
const PORT = 3000;
const url = "mongodb://127.0.0.1:27017/user-database";

// connection =>
connectMongoDB(url).then(() => console.log("Connected to MongoDB"));

// Middleware =>
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));

// handle Routes =>
app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
