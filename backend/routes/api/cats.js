const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Cats");
});

module.exports = router;
