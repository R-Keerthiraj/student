const { createStudent,
  getAllStudents,
  getByStudentById,
  updateStudentById,
  deleteStudent
} = require("./services/mongodb/mongoose");
const logger = require('./utils/logger.utils');

const createStudentData = async (data) => {
  logger.log('createStudentData')
  const student = {
    first_name: data.firstName,
    last_name: data.lastName,
    roll_number: data.rollNumber,
    phone_number: data.phoneNumber,
    email: data.email,
    city: data.city,
    country: data.country,
    pincode: data.pincode
  };
  logger.log(student);
  const studentDocument = await createStudent(student);
  return studentDocument;
}

const getStudentData = async () => {
  logger.log('getStudentData');
  const students = await getAllStudents();
  logger.log(students);
  return students;
};

const getByStudentId = async (id) => {
  logger.log('getByStudentId');
  const student = await getByStudentById(id);
  logger.log(student);
  return student;
};

const updateStudentData = async (id, data) => {
  logger.log(`updateStudentData for id ${id}`);
  const student = await updateStudentById(id, data);
  logger.log(student);
  return student;
};

const deleteStudentById = async (id) =>{
  logger.log('deleteStudentById');
  const student = await deleteStudent(id);
  logger.log(student);
  return student
}
module.exports = {
  createStudentData,
  getStudentData,
  getByStudentId,
  updateStudentData,
  deleteStudentById
};
