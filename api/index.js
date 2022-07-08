/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const getProducts = require('./getProducts');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/getProducts', getProducts);

/**
 * Expose API router
 */
module.exports = router;
