require('dotenv').config()
const express = require('express');
const path = require('path');
const {logger} = require('./middlewares/logEvents');
const { errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const connctToDb = require('./config/dbconn')
//port
const PORT = process.env.PORT;

//db conn
connctToDb()

//app
const app = express();
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())


//db
/*
const uri = 'mongodb+srv://nkengbeza:aJONG-2002@cluster0.4onpbl5.mongodb.net/?retryWrites=true&w=majority'
mongoose
.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch((err) => console.log('db connection error', err))
*/

//root route
app.use('/', express.static(path.join(__dirname, 'public')))

//route
app.use(require('./routes/root'))
app.use(require('./routes/userRequestRoutes.js'))

//404 route
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')){
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if(req.accepts('json')){
    res.json({message: '404 Page Not Found'})
  } else{
    res.type('txt').send('404 Page Not Found')
  }
})



app.use(errorHandler)

//listener
mongoose.connection.once('open', () => {
  console.log('mongodb connected')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
})

