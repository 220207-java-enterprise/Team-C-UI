import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Principal } from './models/principal';
import { CreateUser } from './components/CreateUser';
import { Reimbursement } from './models/reimbursement';


//App component renders a login component and passes into  it authuser prop
// and setcurrentuser prop
function App() {


      //Generic- allows to take a Principal or undefined
  let [authUser, setAuthUser] = useState<Principal>();
  //These are ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ pieces of
  //state that is passed down as props.


  return (
    <Routes>
      <Route path="/" element={<Dashboard currentUser={undefined}/>}/>
      <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/>
      <Route path="/CreateUser" element={<CreateUser/>}/>
      <Route path="/Login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
    </Routes>
  );
};

export default App;
