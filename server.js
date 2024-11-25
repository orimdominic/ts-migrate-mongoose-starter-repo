const { UserModel } = require("./user.model.js");

module.exports = async function (req, res) {
  const users = await UserModel.find({});

  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(
    JSON.stringify(
      {
        users: users.map((u) => ({
          email: u.email,
          favouriteEmoji: u.favouriteEmoji,
          yearOfBirth: u.yearOfBirth,
          createdAt: u.createdAt,
        })),
      },
      null,
      2
    )
  );
};
