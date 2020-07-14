const logger = require('../../services/logger.service')
const reviewService = require('./review.service')

// TODO: needs error handling! try, catch

async function getReviews(req, res) {
    const userId=req.query.userId
    try {
        const reviews = await reviewService.query(userId)
        res.json(reviews)
    } catch (err) {
        logger.error('Cannot get reviews', err);
        res.status(500).send({ error: 'cannot get reviews' })

    }
}
async function getById(req,res){
    const toyId=req.params.id
    try{
        const reviews=await reviewService.getToyReviewsById(toyId)
        res.json(reviews)
    }catch(err){
        logger.error('Cannot get reviews for toy', err);
        res.status(500).send({error:"cant find toy reviews"})
    }
}

async function deleteReview(req, res) {
    try {
        await reviewService.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete review', err);
        res.status(500).send({ error: 'cannot delete review' })
    }
}

async function addReview(req, res) {
    var review = req.body;
    review.userId = req.session.user._id;
    review.username=req.session.user.username
    review = await reviewService.add(review)
    res.json(review)
}

module.exports = {
    getReviews,
    deleteReview,
    addReview,
    getById,
}