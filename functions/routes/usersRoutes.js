const { Router } = require("express");
const router = Router();

const usersController = require("../controllers/usersController");

router.get("/allUsers", usersController.allUsers); // Get all users
router.post("/newUser", usersController.newUser); // Create a new user
router.put("/updateUser/:id", usersController.updateUser); // Update an user by its id
router.delete("/deleteUser/:id", usersController.deleteUser); // Delete an user by its id

module.exports = router;
