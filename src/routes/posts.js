const express = require("express");
const {
  getAllPost,
  getPostById,
  addPost,
  deletePostById,
  updatePostById,
} = require("../controllers/posts");
const validateId = require("../middleware/validateId");

const router = express.Router();

// GET /:id
router.get("/:id", validateId, getPostById);

// GET /v1/posts
router.get("", getAllPost);

router.post("", addPost);

router.put("/:id", validateId, updatePostById);

router.delete("/:id", validateId, deletePostById);

module.exports = router;
