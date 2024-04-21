const express = require('express');
const path = require('path');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const {connectMongoDB} = require('./connect')

const app = express();
const PORT = 4000;
const url = "mongodb://127.0.0.1:27017/url-shorter-app";

connectMongoDB(url, (err, db) => {
    if (err) {
        console.error(err);
    }
}).then(() => {
    console.log("Connected to MongoDB");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});