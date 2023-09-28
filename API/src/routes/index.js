const express = require("express");
// const { validateClientRequest } = require('../middlewares/clientsMiddleware');
const { selectAllUser, createUser, loginUser, updateUsers, checkEmail, getUser } = require("../controllers/usersControllers");
const EXEMPLO = express();


EXEMPLO.get('/select', selectAllUser);
EXEMPLO.get('/get-user', getUser)

EXEMPLO.post("/users/check-email", checkEmail);
EXEMPLO.post('/new-user', createUser);

EXEMPLO.post("/login", loginUser);

EXEMPLO.put("/users/edit/profile/:id", updateUsers);

module.exports = EXEMPLO;

