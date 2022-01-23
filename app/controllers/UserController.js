const cryptoJs = require("crypto-js");
const User = require("../models/User");

exports.userUpdate = async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_CRYP
    );
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userDelete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userGet = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userGetAll = async (req, res) => {
  try {
    const users = await User.find();
    const allUsers = [];
    users.map((user) => {
      const { password, ...others } = user._doc;
      allUsers.push(others);
    });
    //const { password, ...others } = user._doc;
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};
