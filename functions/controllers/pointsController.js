const md5 = require('md5');
const admin = require('firebase-admin');
const db = admin.firestore();

const pointsController = {};


// Create a new point for a specific user
pointsController.newPoint = async(req, res) => {
    const { quantity, reason } = req.body;
    try {
        await db.collection('users').doc(req.params.userId).collection('points').doc().set({ quantity, reason });
        res.status(200).send({ msg: 'New point successfully created' });
    } catch (err) {
        res.status(400).send({ msg: err });

    };
}


// Update a point
pointsController.updatePoint = async(req, res) => {
    try {
        const { quantity, reason } = req.body;
        const pointToUpdate = db.collection('users').doc(req.params.userId)
            .collection('points').doc(req.params.pointId);
        await pointToUpdate.update({ quantity, reason });
        res.status(200).send({ msg: 'Point updated' });
    } catch (err) {
        res.status(400).send({ msg: err });
    }
};


// Delete a point
pointsController.deletePoint = async(req, res) => {
    try {
        const documentToDelete = db.collection('users').doc(req.params.userId)
            .collection('points').doc(req.params.pointId);
        await documentToDelete.delete();
        res.status(200).send({ msg: 'Point deleted' });
    } catch (err) {
        res.status(400).send({ msg: err });
    }
};

module.exports = pointsController;