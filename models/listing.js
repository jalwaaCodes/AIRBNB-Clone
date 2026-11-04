const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Review = require('./review')

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url: {
            type: String,
            default:
                "https://media.istockphoto.com/photos/tropical-paradise-landscape-picture-id1033545162?b=1&k=20&m=1033545162&s=170667a&w=0&h=NfiblLzecjhhbLBC7wETZDU1WO9yTzWy_bCsK9H7STA=",
            set: (v) =>
                v === ""
                    ? "https://media.istockphoto.com/photos/tropical-paradise-landscape-picture-id1033545162?b=1&k=20&m=1033545162&s=170667a&w=0&h=NfiblLzecjhhbLBC7wETZDU1WO9yTzWy_bCsK9H7STA="
                    : v,
        },
    },
    price: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: {
        type: String,
        required: true
    },
})

listingSchema.post('findOneAndDelete', async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } })
    }
})

const Listing = mongoose.model('Listing', listingSchema)
module.exports = Listing

