import mongoose from "mongoose";

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

const MovieModel = mongoose.model("Movie", MovieSchema);

//one update
// const UpdateById = async (id) => {
//   try {
//     //updating in one
//     const result = await MovieModel.updateOne(
//       { _id: id },
//       { name: "Bahubali", ratings: 7 }
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//Many at one time
// const updateMany = async () => {
//   try {
//     const result = await MovieModel.updateMany(
//       { ratings: 5 },
//       { name: "5 star Movies" }
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateMany = async () => {
  try {
    // const result = await MovieModel.findByIdAndDelete(
    //   "666ad5a5b68bf4db551b0b63"
    // );

    // const result = await MovieModel.deleteOne({ name: "Bahubali" });

    const result = await MovieModel.deleteMany({ name: "Bahubali" });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export { UpdateById };
export { updateMany };
