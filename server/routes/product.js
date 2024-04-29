const router = require('express').Router()
const ctrls = require('../controllers/product')

router.post('/createProduct', ctrls.createProduct);
router.get('/getAll', ctrls.getAll);
router.post('/getData', ctrls.getData);

module.exports = router;