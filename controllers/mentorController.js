const Mentor = require('../models/mentor');
const Student = require('../models/student');

// Create a new mentor
exports.createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const mentor = new Mentor({ name, email });
    await mentor.save();
    res.status(201).json({ message: 'Mentor created successfully', mentor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Show all students assigned to a mentor
exports.getStudentsForMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate('students');
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    res.status(200).json(mentor.students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
