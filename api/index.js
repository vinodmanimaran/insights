const express = require ('express');
const app = express ();
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');
const authRoute = require ('./routes/auth');
const userRoute = require ('./routes/users');
const postRoute = require ('./routes/posts');
const categoryRoute = require ('./routes/categories');
const multer = require ('multer');
const path = require ('path');

dotenv.config ();

// Middleware
app.use (express.json ());
app.use ('/images', express.static (path.join (__dirname, '/images')));

// Connect to MongoDB
mongoose
  .connect (process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then (() => console.log ('Connected to MongoDB'))
  .catch (err => console.log (err));

// Multer configuration
const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, 'images');
  },
  filename: (req, file, cb) => {
    cb (null, req.body.name);
  },
});

const upload = multer ({storage: storage});

// API endpoint for file upload
app.post ('/api/upload', upload.single ('file'), (req, res) => {
  res.status (200).json ('File has been uploaded');
});

// API routes
app.use ('/api/auth', authRoute);
app.use ('/api/users', userRoute);
app.use ('/api/posts', postRoute);
app.use ('/api/categories', categoryRoute);

// Start the server
app.listen (8000, () => {
  console.log ('Backend is running');
});
