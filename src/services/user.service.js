import userDao from "../models/persistence/user.dao";

const getUser = (userId) => {
  return userDao.getUser(userId);
};
const updateUser = (userId) => {
  return userDao.updateUser(userId);
};
const addUser = (details) => {
  return userDao.insert(details);
};
const removeUser = (userId) => {
  return userDao.remove(userId);
};
