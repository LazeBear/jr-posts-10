const express = require("express");
const postsRoute = require("./routes/posts");

const router = express.Router();

// /v1/posts/xxxxx

router.use("/posts", postsRoute);

module.exports = router;
