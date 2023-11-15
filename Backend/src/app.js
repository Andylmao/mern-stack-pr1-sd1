const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require('./models/UserEmployee');
const User = require('./models/User');
// settindasd
app.set('port', process.env.PORT || 4000); 
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

app.post("/login", (req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }
    })
})

app.post('/register',(req,res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

module.exports = app;
