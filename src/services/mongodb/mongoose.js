const mongoose = require('mongoose');
const { Student } = require('./schema/student');
const logger = require('../../utils/logger.utils')
// eslint-disable-next-line no-undef
const MONGODBURI = process.env.MONGODB_URI
let mongodbClient;

const mongodb = async () => {
  if (!mongodbClient) {
    mongodbClient = mongoose.connect(MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await mongodbClient;
    logger.log('Successfully connected to MongoDB');
  }
  return mongodbClient;
};
const createStudent = async (payload) => {
  await mongodb();
  const student = new Student(payload);
  return await student.save();
}
const getAllStudents = async () => {
  await mongodb();
  const students = await Student.find({});
  return students;
};
const getByStudentById = async (id) => {
  await mongodb();
  const student = await Student.findById(id);
  return student;
};
const updateStudentById = async (id, data) => {
  await mongodb();
  const student = await Student.findByIdAndUpdate({ '_id': id }, { $set: data });
  return student;
};
const deleteStudent = async (id)=>{
  await mongodb();
  const student = await Student.findByIdAndDelete({'_id':id});
  return student
}
module.exports = {
  createStudent,
  getAllStudents,
  getByStudentById,
  updateStudentById,
  deleteStudent
}