import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URI, () => {
      console.log('Connected to MongoDB');
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;