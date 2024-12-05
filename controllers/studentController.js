const Student = require('../models/student');
const Mentor = require('../models/mentor');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Student({ name, email });
    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Assign or change mentor for a student
exports.assignMentorToStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const { mentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

    student.mentor = mentorId;
    await student.save();

    // Add student to mentor's student list
    mentor.students.push(studentId);
    await mentor.save();

    res.status(200).json({ message: 'Mentor assigned/changed successfully', student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Show previously assigned mentor for a particular student
exports.getPreviousMentor = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('mentor');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student.mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students who have no mentor
exports.getStudentsWithoutMentor = async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
