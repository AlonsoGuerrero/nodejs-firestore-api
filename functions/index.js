const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert('./credentials.json')
});

const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const pointsRoutes = require('./routes/pointsRoutes');

const app = express();

app.use('/users', usersRoutes);
app.use('/points', pointsRoutes);

exports.app = functions.https.onRequest(app);