
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');

dotenv.config();
const MONGODB_URI = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ggx5kyv.mongodb.net/?retryWrites=true&w=majority`;

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 8090;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to DB');

    const treatmentRoutes = require('./routes/treatmentRoutes');
    app.use('/', treatmentRoutes);

    app.listen(PORT, () => console.log('Server is running on port ' + PORT));
  })
  .catch((err) => console.log(err));
