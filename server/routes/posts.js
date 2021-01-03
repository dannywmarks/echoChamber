const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  likePost,
  unlikePost,
  createComment,
  deleteComment,
} = require("../controllers/posts");
const auth = require("../middleware/auth");
const router = new express.Router();
const { check } = require("express-validator");

// get all chambers, private
router.get("/", auth, getPosts);
// create a post, private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  createPost
);
// get single post
router.get("/:id", auth, getPost);
// like a post
router.put("/like/:id", auth, likePost);
// unlike a post
router.put("/unlike/:id", auth, unlikePost);
// delete post
router.delete("/:id", auth, deletePost);
// comment on post
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  createComment
);
// delete comment
router.delete("/comment/:id/:comment_id", auth, deleteComment);

module.exports = router;
