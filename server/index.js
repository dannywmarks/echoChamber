const express = require('express');
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose');
const cors = require('cors');
const topicsRoutes = require('./routes/topics')

const app = express();

// Json body parser 
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
// cross site scripting
app.use(cors());

// Prefix for Routes
app.use('/topics', topicsRoutes)


// Mongo DB cluster setup
const CONNECTION_URL = "mongodb+srv://martialEngineer:Jud0g1rl!@cluster0.legyf.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server runnong on port: ${PORT}`)))
  .catch((e) => console.log(e.message));

mongoose.set('useFindAndModify', false);