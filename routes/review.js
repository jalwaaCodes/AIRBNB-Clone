const express = require('express')
const mongoose = require('mongoose')
const router = express.Router({mergeParams:true})
const wrapAsync = require('../utils/wrapAsync')
const ExpressError = require('../utils/ExpressError')
const Review = require('../models/review')
const Listing = require('../models/listing')
const {validateReview, isLoggedIn,isReviewAuthor} = require('../middleware')
const reviewController = require('../controllers/reviews')

/*Review Post Route */
router.post('/',isLoggedIn, validateReview, wrapAsync(reviewController.createReview))

/*Review Delete Route */
router.delete('/:reviewId', isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router