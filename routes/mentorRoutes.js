const express = require('express');
const { createMentor, getStudentsForMentor } = require('../controllers/mentorController');
const router = express.Router();

router.post('/create', createMentor);
router.get('/:mentorId/students', getStudentsForMentor);

module.exports = router;
