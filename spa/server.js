const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "ux", "static")));

app.get("/*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "ux", "index.html"));
});

app.listen(process.env.PORT || 1111, () => console.log("Server running..."));