const { 
  createStudentData,
  getStudentData,
  getByStudentId,
  updateStudentData,
  deleteStudentById } = require('./student');
const { sendResponse, sendErrorResponse } = require('./utils/response.utils');
const logger = require('./utils/logger.utils');

module.exports.createStudent = async (event) => {
  logger.log('createStudent');
  const data = JSON.parse(event.body);
  try {
    const newStudent = await createStudentData(data);
    return sendResponse(newStudent);
  } catch (e) {
    logger.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.listStudent = async () => {
  logger.log('getStudent');
  try {
    const students = await getStudentData();
    return sendResponse(students);
  } catch (e) {
    logger.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.readStudent = async (event) => {
  logger.log('getStudentById');
  try {
    const id = event.pathParameters.id;
    const student = await getByStudentId(id);
    return sendResponse(student);
  } catch (e) {
    logger.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.updateStudent = async (event) => {
  logger.log('updateStudent');
  try {
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);
    const student = await updateStudentData(id, data);
    return sendResponse(student);
  } catch (e) {
    logger.log(e.message);
    return sendErrorResponse(e.message);
  }
};

module.exports.deleteStudent = async(event)=>{
  logger.log('deleteStudent');
  try{
    const id = event.pathParameters.id;
    const student= await deleteStudentById(id);
    return sendResponse(student);
  }catch (e){
    logger.log(e.message);
    return sendErrorResponse(e.message);
  }
};