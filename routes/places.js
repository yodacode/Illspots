var express = require('express');
var router = express.Router();


// {
// 	address: {
// 		title: 'Palais de Tokyo',
// 	  	city: 'Paris',
// 	  	coordinates: {
// 	    	lat: 48.8641202,
// 			lgn: 2.297178000000031        
// 	  	},
// 	  	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
// 	}
// }
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
