import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Principal } from './models/principal';
import { User } from './models/user';
import { UpdateUser } from './models/updateuser';
import Register from './components/Register';
import UpdateAUser from './components/UpdateAUser';
import { Reimbursement } from './models/reimbursement';
import UpdatedReimbursement from './components/UpdateReimbursement';
import CreateReimbursement from './components/CreateReimbursement';


//App component renders a login component and passes into  it authuser prop
// and setcurrentuser prop
function App() {


      //Generic- allows to take a Principal or undefined
  let [authUser, setAuthUser] = useState<Principal>();
  let [newUser, setnewUser] = useState<User>();
  let [updateUser, setUpdateUser] = useState<UpdateUser>();
  let [updateReimbursment, setUpdateReimbursement] = useState<Reimbursement>();
  let [createReimbursment, setNewReimbursement] = useState<Reimbursement>();

  //These are ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ pieces of
  //state that is passed down as props.


  return (
    <Routes>
      <Route path="/" element={<Dashboard currentUser={undefined}/>}/>
      <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/>
      <Route path="/UpdateUser" element={<UpdateAUser updateUser={updateUser} setUpdateUser={setUpdateUser} currentUser={authUser}/>}/>
      <Route path="/Login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
      <Route path="/Register" element={<Register registerUser={newUser} setRegisterUser={setnewUser}/>}/>
      <Route path="/UpdateReimbursement" element={<UpdatedReimbursement updateReimbursment={updateReimbursment} setUpdateReimbursement={setUpdateReimbursement} currentUser={undefined}/>}/>
      <Route path="/CeateReimbursement" element={<CreateReimbursement createReimbursement={createReimbursment} setCreateReimbursement={setNewReimbursement} currentUser={undefined}/>}/>
    </Routes>
  );
};

export default App;
