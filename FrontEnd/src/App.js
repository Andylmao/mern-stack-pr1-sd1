import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Signup from './signup';
import Login from './Login';
import Home from './home';

//asda

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
  /*
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/edit/:id" element={<CreateNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );*/
}


export default App;

