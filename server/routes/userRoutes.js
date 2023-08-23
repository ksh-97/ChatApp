const express = require("express");
const {registerUser, authUser, allUsers} = require("../controllers/userControllers");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/', (protect, allUsers));   // go through protect middleware before going to allusers middleware

module.exports = router;