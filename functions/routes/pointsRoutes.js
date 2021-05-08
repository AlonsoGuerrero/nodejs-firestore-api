const { Router } = require('express');
const router = Router();

const pointsController = require('../controllers/pointsController');

router.post('/newPoint/:userId', pointsController.newPoint); // Create a new point
router.put('/updatePoint/:userId/:pointId', pointsController.updatePoint); // Update an point by its id
router.delete('/deletePoint/:userId/:pointId', pointsController.deletePoint); // Delete an point by its id

module.exports = router;