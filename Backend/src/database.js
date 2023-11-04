const mongoose = require('mongoose');

const URI = 'mongodb+srv://luisandresgarcialopez:p0zbCkeDX0c8sqoe@notesapp.nioquxi.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri).then(db => console.log('db is conected')).catch(err => console.log(err));


module.exports = mongoose;
