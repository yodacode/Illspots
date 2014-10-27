var express = require('express');
var router = express.Router();

// db.places.insert({ 'title': 'Palais de Tokyo', 'type': 'street', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', 'address' : {'coordinates': {'lat': 48.8641202, 'lgn': 2.297178000000031}} });
// db.places.insert({ 'title': 'Skatepark de Sèvres', 'type': 'skatepark', 'description': 'Sit amet, consectetur adipisicing elit, sed do eiusmod', 'address' : {'coordinates': {'lat': 48.82522669999999, 'lgn': 2.2196570999999494}} });
// db.places.insert({ 'title': 'Skatepark de Trivo', 'type': 'skatepark', 'description': 'Sit amet, Sit amet, cSit amet, onsectetur adipisicing elit, sed do eiusmod', 'address' : {'coordinates': {'lat': 48.7963627, 'lgn': 2.2324630000000525}} });

/* GET users listing. */
router.get('/', function(req, res) {
	var db = req.db;

    db.collection('places').find().toArray(function (err, items) {
        res.json(items);
    });

});

router.get('/:place_id', function(req, res) {
	var db = req.db;

    db.collection('places').findById(req.params.place_id, function (err, items) {
		if (err) {
    		res.json(items);
		}
    	res.json(items);
    });

});

module.exports = router;
