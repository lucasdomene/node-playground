const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    status: 'success',
  });
};

const getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
