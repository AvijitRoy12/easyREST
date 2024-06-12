import users from "../data/users.data";

const get = (userId) => {
  const finduser = users.find((user) => {
    if (user.id === userId) {
      return user;
    }
    return null;
  });
  return finduser;
};

const getAll = () => {
  return users;
};

const update = (userId) => {};

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      users.splice(index, 1);
      return true;
    }
    return false;
  };
  return users.find(deleteUser);
};

export default { get, remove };
