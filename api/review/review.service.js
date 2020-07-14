
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    add,
    getToyReviewsById,
}

async function query(id) {
    const criteria = _buildCriteria(id)
    const collection = await dbService.getCollection('review')
    try {
        const reviews = await collection.find(criteria).toArray();
        return reviews
    } catch (err) {
        console.log('ERROR: cannot find reviews')
        throw err;
    }
}

async function remove(reviewId) {
    const collection = await dbService.getCollection('review')
    try {
        await collection.deleteOne({"_id":ObjectId(reviewId)})
    } catch (err) {
        console.log(`ERROR: cannot remove review ${reviewId}`)
        throw err;
    }
}

async function getToyReviewsById(toyId){
    const collection=await dbService.getCollection('review')
    try{
        const reviews=await collection.find({toyId:toyId.toString()}).sort({"published":-1}).toArray()
        return reviews
    }catch(err){
        console.log("Problem Finding reviews for toyId "+toyId)
        throw err;
    }
}


async function add(review) {
    const collection = await dbService.getCollection('review')
    try {
        review.published=Date.now()
        await collection.insertOne(review);
        return review;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(userId) {
    if(!userId) return {}
    let criteria = {};
    criteria={"userId":userId}
    return criteria;
}

