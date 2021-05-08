# API REST with Cloud Functions

URL BASE: https://us-central1-modern-diode-313017.cloudfunctions.net/app
___
## **Collection Users**
### Create a new user
* Method: Post
* Path: /users/newUser
* body: {name, email, password}
### Update an user
* Method: Put
* Path: /users/updateUser/:id
* body: {name, email, password}
### Delete an user
* Method: Delete
* Path: /users/deleteUser/:id


___
## **Subcollection Points**
### Create a new point
* Method: Post
* Path: /points/newPoint/:userId
* body: {quantity, reason}
### Update a point
* Method: Put
* Path: /points/updatePoint/:userId/:pointId
* body: {quantity, reason}
### Delete a point
* Method: Delete
* Path: /points/deletePoint/:userId/:pointId
