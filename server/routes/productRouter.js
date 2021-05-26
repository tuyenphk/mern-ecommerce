const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')

router.route('/products')
      .get()
      .post()

router.route('/products/:id')
      .delete()
      .put()

module.exports = router