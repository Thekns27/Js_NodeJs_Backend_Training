const {Msg} = require ('../utils/core');

const register = async (req, res, next) => {
  let name = req.body.name;
  let phone = req.body.phone;
  let password = req.body.password;

  Msg(res,"Register Success",req.body);
};

module.exports = {
  register,
};
