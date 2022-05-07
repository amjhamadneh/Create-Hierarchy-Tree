const Router = require('express');
const router = Router(); // Create Express Router

// =========== CONTROLLERS =====================

const  {
    addPositions,
    getPositions
} = require('../controllers/positionController');

router.get("/", getPositions);
router.post("/", addPositions);

module.exports = router;



