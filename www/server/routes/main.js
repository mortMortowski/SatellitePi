const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
    const locals = {
        title: "SatellitePi",
        description: "Automatic weather satellite receiving station."
    }

    res.render("index", { locals });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/images", (req, res) => {
    res.render("images");
});

module.exports = router;