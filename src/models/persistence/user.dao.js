import users from "../data/users.data";

const getUser = () => {};
const updateUser = () => {};
const insert = (details) => {
  const newUser = { ...details, id: users.length + 1 };
  users.push(newUser);
  return newUser;
};

const remove = (userId) => {
  const findUser = (userId, index) => {
    if (users.id === userId) {
      users.splice(index, 1);
      return true;
    }
  };
  return users.find(findUser);
};

export default { getUser, updateUser, insert, remove };
