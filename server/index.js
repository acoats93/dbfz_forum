require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
//controllers
const {getAllCharacters} = require('./controllers/characterController');
const {login, logout, getUser, register, addUserCharacters} = require('./controllers/userController');
const {addCharacter, editCharacter, deleteCharacter} = require('./controllers/adminController');
const {addComment, editComment, deleteComment} = require('./controllers/commentController');
const {getAllTerms} = require('./controllers/generalController');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;


app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:1000*60*60*24*7        
    }
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db);
    console.log('Database Connected :D')
})

//general endpoints
app.get('/api/general', getAllTerms);
//character endpoints
app.get('/api/characters', getAllCharacters);
//auth endpoints
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.get('/auth/user', getUser);
//admin endpoints
app.post('/admin/add', addCharacter);
app.put('/admin/edit/:char_id', editCharacter);
app.delete('/admin/delete/:char_id', deleteCharacter);
//comment endpoints
app.post('/api/comments', addComment);
app.put('/api/comments/:comment_id', editComment);
app.delete('/api/comments/:comment_id', deleteComment);
//team endpoints
app.put('/api/team/:user_id', addUserCharacters);



app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));