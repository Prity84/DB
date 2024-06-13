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

//retriving data from database

const MovieModel = mongoose.model("Movie", MovieSchema);

const SingleDoc = async () => {
  try {
    // const result = await MovieModel.find().limit(3); //only 3 gives

    // const result = await MovieModel.find().skip(2); //skip 2 first doc

    // const result = await MovieModel.find().countDocuments(); //all

    // const result = await MovieModel.find().sort({ name: 1 });

    // const result = await MovieModel.find({ money: { $lt: 50000 } });

    // const result = await MovieModel.find({ money: { $ne: 6000 } });

    // const result = await MovieModel.find({
    //   $or: [{ money: 10000 }, { ratings: 5 }],
    // });               //All gives

    const result = await MovieModel.find({
      $and: [{ money: 10000 }, { ratings: 5 }],
    }); //Both condition should be true

    // const result = await MovieModel.findById(
    //   "666ad5b1b9f15d060bdc228e",
    //   "name"
    // ); //Single doc
    console.log(result);
    // console.log(result.name);
    // console.log(result.ratings);
    // console.log(result.Comments);

    // const result = await MovieModel.find(); //all data doc
    // console.log(result);

    //iterate over
    // result.forEach((movies) => {
    //   console.log(movies.name);
    //   console.log(movies.ratings);
    //   console.log(movies.genre);
    //   console.log(movies.genre[1]);
    //   console.log(movies.genre[0]);
    //   console.log(movies.money);
    // });
  } catch (error) {
    console.log(error);
  }
};

// export { allDoc };
export { SingleDoc };
