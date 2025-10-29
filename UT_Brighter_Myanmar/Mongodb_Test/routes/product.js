const express = require("express");
const router = express.Router();
const controllers = require("../controllers/productsController");

router.get('/',controllers.all);
router.post('/',controllers.add);
router.patch('/:id',controllers.modify);
router.delete('/:id',controllers.drop);
router.get('/aggre',controllers.aggre);


module.exports = router;