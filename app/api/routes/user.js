var router = require('express').Router();

var user_controller = require('../controllers/users_controller.js')

router.get('/user/:id', user_controller.user_detail);

router.get('/user', function(req, res) {
    res.json({ new_thing: 'this is new'});   
});

module.exports = router;
