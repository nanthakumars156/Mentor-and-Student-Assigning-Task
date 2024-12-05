const express = require('express');
const { createStudent, assignMentorToStudent, getPreviousMentor, getStudentsWithoutMentor } = require('../controllers/studentController');
const router = express.Router();

router.post('/create', createStudent);
router.put('/:studentId/assign-mentor', assignMentorToStudent);
router.get('/:studentId/previous-mentor', getPreviousMentor);
router.get('/without-mentor', getStudentsWithoutMentor);

module.exports = router;
