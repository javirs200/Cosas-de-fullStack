const books = require('./books')
const products = require('./products')

const router = require('express').Router()

router.use('/books',books)
router.use('/products',products)

module.exports = router