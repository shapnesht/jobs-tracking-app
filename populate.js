require("dotenv").config();
const connectDB = require("./db/connect");
const Job = require("./models/Job");

const jobJSON = require("./jobsmockdata.json");
const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany();
    await Job.create(jobJSON);
    console.log("SUCCESSFULLY SAVED DATA TO DATABASE!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();
