import mongoose from "mongoose";

//Define Schema

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  Comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//Creating model

const MovieModel = mongoose.model("Movie", MovieSchema);

//one document
// const createDoc = async () => {
//   try {
//     //Create new document (one)

//     const m1 = new MovieModel({
//       name: "Gaddar",
//       ratings: 5,
//       money: 5000,
//       genre: ["action", "romance"],
//       isActive: true,
//       Comments: [{ value: "That was an amezing movie" }],
//     });
//     const result = await m1.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { createDoc };

//Many documents

const insertManyDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "Gaddar",
      ratings: 5,
      money: 5000,
      genre: ["action", "romance"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const m2 = new MovieModel({
      name: "Tiger",
      ratings: 4,
      money: 6000,
      genre: ["action", "romance"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const m3 = new MovieModel({
      name: "Mongli",
      ratings: 5,
      money: 10000,
      genre: ["advantures", "cartoon"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const m4 = new MovieModel({
      name: "Three idiots",
      ratings: 5,
      money: 8000,
      genre: ["action", "romance"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const m5 = new MovieModel({
      name: "Dear zindagi",
      ratings: 5,
      money: 7000,
      genre: ["action", "romance"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const m6 = new MovieModel({
      name: "Ek villian",
      ratings: 5,
      money: 9000,
      genre: ["action", "romance"],
      isActive: true,
      Comments: [{ value: "That was an amezing movie" }],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { insertManyDoc };
