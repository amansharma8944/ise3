



import mongoose from 'mongoose';

// MongoDB connection URI (replace '<db_username>', '<db_password>', and '<db_name>' with your actual credentials)

const uri ="mongodb+srv://amandeepsharma8944:KE6f9ZntdcwjXVMn@first.yevkcfs.mongodb.net/"

// Function to establish database connection
const connectToDatabase = async () => {
  try {
    // Configure Mongoose to use the ES6 built-in Promise
    mongoose.Promise = global.Promise;

    // Establish database connection
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Export the function to connect to the database
export default connectToDatabase;
