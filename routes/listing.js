const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const wrapAsync = require('../utils/wrapAsync')
const Listing = require('../models/listing')
const { isLoggedIn, isOwner, validateListing } = require('../middleware')
const listingController = require('../controllers/listings')
const multer = require('multer')
const { storage } = require('../cloudConfig')
const upload = multer({ storage })

router.route('/')
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        validateListing,
        upload.single('listing[image]'),
        wrapAsync(listingController.createListing))
// .post(upload.single('listing[image]'), (req, res) => {
//     res.send(req.file)
// })

/*New Route */
router.get('/new', isLoggedIn, listingController.renderNewForm)

router.get('/search', wrapAsync(listingController.searchListings))

router.route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, validateListing, upload.single('listing[image]'), wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))

/*Edit Route */
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

module.exports = router