require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')
const path = require('path')






const app = express()
app.use(cors())
app.use(express.json())


// Routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)


// Connect to MongoDB
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';
mongoose.connect(URI, {
    
    useNewUrlParser: true,
   
}
);



const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected');
});




// Listen Server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

const apiKey = process.env.GPT_CLAVE_API; 

app.post('/api/gpt', async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      // Configura los parámetros de la solicitud según lo necesario
      input: req.body.input,
      // Otros parámetros...
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});
