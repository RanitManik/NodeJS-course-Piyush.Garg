const express = require('express');
const urlRoute = require('./routes/url');
const {connectMongoDB} = require('./connect')

const app = express();
const PORT = 3001;
const url = "mongodb://127.0.0.1:27017/url-shorter";

connectMongoDB(url, (err, db) => {
    if (err) {
        console.error(err);
    }
}).then(() => {
    console.log("Connected to MongoDB");
})

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});