import express from "express";
const app = express();
app.get("/get", (req, res) => {
    res.send("hello");
});
app.listen(6000, () => {
    console.log(6000);
});
