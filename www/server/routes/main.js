const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
    res.send('SatellitePi 0.1 <img src="/sat-images/METEOR_M2-3/2026/01/METEOR-M23_CH4_20260129_2050_Switzerland.png">');
});

module.exports = router;