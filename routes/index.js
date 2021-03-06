var express = require('express');
var router = express.Router();
router.use('/api/users', require('./api/users'));
router.use('/api/courses', require('./api/course'));
router.use('/api/roydad', require('./api/roydad'));
router.all('/', (req, res) => {
  res.send({
    status: 'success'
  })
});
module.exports = router;