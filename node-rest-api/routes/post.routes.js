const express = require("express");
const Post = require("../models/post.model");

const router = express.Router();

// Create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savePost = await newPost.save();

    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });

      res.status(200).json("the post has been updated");
    } else {
      return res.status(403).json("You can update only your post");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.deleteOne();

      res.status(200).json("Post has been deleted");
    } else {
      return res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Like a post
// get a post
// get timeline post

module.exports = router;
