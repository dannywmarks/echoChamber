const express = require('express');
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose');
const cors = require('cors');
const echosRoutes = require('./routes/echos')
const userRoutes = require('./routes/users')
const dotenv = require('dotenv');

const app = express();
dotenv.config()

// Json body parser 
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
// cross site scripting
app.use(cors());

// Prefix for Routes
app.use('/echos', echosRoutes)
app.use('/users', userRoutes)


// Mongo DB cluster setup

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((e) => console.log(e.message));

mongoose.set('useFindAndModify', false);