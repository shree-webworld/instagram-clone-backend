

const express = require('express');
const router = new express.Router();
const asyncHandler = require('express-async-handler');
const auth = require("../middlewares/auth");


const createPostController = require("../controllers/createPostController");

const allPostController = require("../controllers/allPostController");
const myPostController = require("../controllers/myPostController");

const likesController = require("../controllers/likesController");
const dislikesController = require("../controllers/dislikesController");

const commentsController = require("../controllers/commentsController");

const postDeleteController = require("../controllers/postDeleteController");



router.post("/api/createpost", auth, asyncHandler(createPostController) );
router.get("/api/createpost", asyncHandler(createPostController) );

router.get("/api/allpost", auth, asyncHandler(allPostController));
router.get("/api/mypost",auth, asyncHandler(myPostController));

router.put("/api/post/likes",auth, asyncHandler(likesController));
router.put("/api/post/dislikes",auth, asyncHandler(dislikesController));

router.put("/api/post/comments",auth, asyncHandler(commentsController));

router.delete("/api/post/delete/:postId", auth, asyncHandler(postDeleteController));

module.exports = router;
