const { Router } = require("express");
const router = Router();

const pointsController = require("../controllers/pointsController");

router.post("/newPoint/:userId", pointsController.newPoint); // Create a new point
router.put("/updatePoint/:userId/:pointId", pointsController.updatePoint); // Update a point by its id
router.delete("/deletePoint/:userId/:pointId", pointsController.deletePoint); // Delete a point by its id

module.exports = router;
