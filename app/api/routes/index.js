var router = require('express').Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// router.get('/users', function(req, res) {
//     res.json({ new_thing: 'this is new'});   
// });

router.get('/asdf', function(req, res) {
    res.json({ new_thing: 'this is new'});   
});
module.exports = router;
