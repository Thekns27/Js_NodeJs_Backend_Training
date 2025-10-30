const register = async (req, res, next) => {
  console.log(req.body);
  res
    .status(200)
    .json({ con: true, msg: "Register successful", result: req.body });
};

module.exports = {
  register,
};
