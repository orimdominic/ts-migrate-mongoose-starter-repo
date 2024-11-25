require("dotenv").config(); // load env variables
const db = require("../db.js");
const { UserModel } = require("../user.model.js");

const seedUsers = [
  { email: "john@email.com", favouriteEmoji: "🏃", yearOfBirth: 1997 },
  { email: "jane@email.com", favouriteEmoji: "🍏", yearOfBirth: 1998 },
];

export async function up(): Promise<void> {
  await db.connect(process.env.MONGO_URI);
  await UserModel.create(seedUsers);
}

export async function down(): Promise<void> {
  await db.connect(process.env.MONGO_URI);
  await UserModel.delete({
    email: {
      $in: seedUsers.map((u) => u.email),
    },
  });
}
