const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  //   res.send("Hello Worlds!");
  res.json({
    data: "You hit signup endpoint again!",
  });
});

module.exports = router;
