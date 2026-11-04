const mongoose = require('mongoose')
const initData = require('./data')
const Listing = require('../models/listing')
const MONGO_URL = "mongodb://127.0.0.1:27017/AIRBNB"

async function main() {
    await mongoose.connect(MONGO_URL)
}

main().then(() => {
    console.log('Connected to DB')
}).catch((error) => {
    console.log(error)
})

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '6acf8ec7688c8478b3b0d7ea' }))
    await Listing.insertMany(initData.data);
    console.log('data was initialized')
}

initDB()