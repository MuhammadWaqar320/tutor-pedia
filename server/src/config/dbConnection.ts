import mongoose from "mongoose";

const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lms-project");
  } catch (error: any) {
    console.log(`Database Connection failed due to this error:${error}`);
  }
};

dbConnection();
