const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const error = require("../utilities/error");
const users = require("../data/users") // get users from data
const comments = require("../data/comments")

router
.route("/")
.get((req, res) =>{
    res.json(comments)
})
.post((req, res, )=>{
    const comment = {
        id: comments[comments.length - 1].id + 1,
        userId: req.body.userId,
        postId: req.body.postId,
        body: req.body.body,
      };
      comments.push(comment);
      res.json(comments[comments.length - 1]);
})

router.route("/:id")
.get((req, res, next) => {
    const comment = (comments.find((p) => p.id == req.params.id))
    if (comment) res.json({comment});
        else
        next();
})

module.exports = router;