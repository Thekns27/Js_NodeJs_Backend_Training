const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usersControllers");

router.get ('/',controllers.all);
router.post('/', controllers.add);
router.patch('/:name', controllers.modify);
router.delete('/:name', controllers.drop);

module.exports = router;