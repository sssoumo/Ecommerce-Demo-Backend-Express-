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
