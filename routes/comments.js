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

module.exports = router;