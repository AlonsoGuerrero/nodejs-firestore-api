const md5 = require("md5");
const admin = require("firebase-admin");
const db = admin.firestore();

const usersController = {};

// Get all users
usersController.allUsers = async (req, res) => {
  try {
    const users = db.collection("users");
    const QuerySnapshot = await users.get();
    const docs = QuerySnapshot.docs;
    const resDocs = docs.map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
      };
    });
    res.status(200).send(resDocs);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

// Create a new user
usersController.newUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await db
      .collection("users")
      .doc()
      .set({ name, email, password: md5(password) });
    res.status(200).send({ msg: "New user successfully created" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

// Update a user
usersController.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const documentToUpdate = db.collection("users").doc(req.params.id);
    await documentToUpdate.update({ name, email, password: md5(password) });
    res.status(200).send({ msg: "User updated" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

// Delete a user
usersController.deleteUser = async (req, res) => {
  try {
    const documentToDelete = db.collection("users").doc(req.params.id);
    await documentToDelete.delete();
    res.status(200).send({ msg: "User deleted" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

module.exports = usersController;
