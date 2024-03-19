const Post = require("../model/post");

exports.all = (req, res) => {
  req.user
    .getPosts()
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error", error: err });
    });
};

exports.create = (req, res) => {
  const user = req.user;

  user
    .createPost({ title: req.body.title, content: req.body.content })
    .then((post) => {
      res.status(201).json({ message: "Post created", post: post });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error", error: err });
    });
};
