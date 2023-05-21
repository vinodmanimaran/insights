const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const connectDB = require('./config/dbcon');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const allowedOrigins = require('./config/allowedorigin');
const PORT = process.env.PORT || 3500;

dotenv.config();

// DB CONNECTION
connectDB();

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add OPTIONS method here
    allowedHeaders: ['Content-Type', 'Authorization'], // Add any additional headers you require
  })
);

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

// API endpoint for file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
});

// API routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

// Start the server
app.listen(PORT, () => {
  console.log('Backend is running');
});
