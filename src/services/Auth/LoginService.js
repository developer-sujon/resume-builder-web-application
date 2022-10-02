//External Import
const bcrypt = require("bcrypt");

//Internal Import
const CreateToken = require("../../utility/CreateToken");
const { CreateError } = require("../../helper/ErrorHandler");

const LoginService = async (Request, DataModel) => {
  const { UserName, Password } = Request.body;

  if (!UserName || !Password) {
    throw CreateError("Invalid Data", 400);
  }
  const User = await DataModel.aggregate([{ $match: { UserName: UserName } }]);

  if (!User.length > 0) {
    throw CreateError("User Not found", 404);
  }

  const verifyPassword = await bcrypt.compare(Password, User[0].Password);
  if (!verifyPassword) {
    throw CreateError("Unauthorized Credentials", 401);
  }

  const userNotActive = await DataModel.aggregate([
    {
      $match: {
        UserName: UserName,
        AccountStatus: "PENDING",
      },
    },
  ]);

  if (userNotActive.length > 0) {
    throw CreateError("User Not Active", 401);
  }

  const userBlock = await DataModel.aggregate([
    {
      $match: {
        UserName: UserName,
        AccountStatus: "REJECTED",
      },
    },
  ]);

  if (userBlock.length > 0) {
    throw CreateError("User Block", 401);
  }

  const payLoad = {
    id: User[0]._id,
    Roles: User[0].Roles,
    UserName: User[0].UserName,
  };

  const token = await CreateToken(payLoad);

  return { accessToken: token };
};

module.exports = LoginService;
