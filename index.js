// Import required modules
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import connectToDatabase from "./database.js";
import User from "./student.js";
// Create an instance of Express
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());
// Define a route
connectToDatabase();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});




app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("amandeep")
  
    try {
      // Find user in the database
      const user = await User.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

   
    
  // Successful login
      return res.status(200).json({ message: "login done" });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

// Start the server
const PORT = process.env.PORT || 3000; // Use the port defined in the environment variable, or 3000 if not defined
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
