
const express = require('express');
const router = new express.Router();
const asyncHandler = require('express-async-handler');
const auth = require("../middlewares/auth");


const searchProfileController = require("../controllers/searchProfileController");

const searchProfileIdController = require("../controllers/searchProfileIdController");

const profileFollowersController = require("../controllers/profileFollowersController");

const profileUnfollowersController = require("../controllers/profileUnfollowersController");

const followingListController = require("../controllers/followingListController");

const followersListController = require("../controllers/followersListController");



router.post("/api/profile/search", auth, asyncHandler(searchProfileController) );

router.get("/api/profile/search/:id", auth, asyncHandler(searchProfileIdController));

router.put("/api/profile/followers", auth, asyncHandler(profileFollowersController));

router.put("/api/profile/unfollowers", auth, asyncHandler(profileUnfollowersController));

router.post("/api/profile/following/list", auth, asyncHandler(followingListController));

router.post("/api/profile/followers/list", auth, asyncHandler(followersListController));




module.exports = router;
