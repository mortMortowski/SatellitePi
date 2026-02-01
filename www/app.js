require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.static("public"));
app.use("/sat-images", express.static("/home/mort/Documents/SatellitePi/sat-images"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
    console.log(`SatellitePi web server listening on port ${PORT}`);
});