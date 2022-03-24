
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { findUserAndUpdate } from "../remote/user-service";
import ErrorMessage from "./ErrorMessage";
import './Style.css';
import { User } from "../models/user";
import React, { SyntheticEvent, useState } from "react";
import { UpdateUser } from "../models/updateuser";
import { Principal } from "../models/principal";

//Props are peices of data that are passed into component as 
//attributes from some component that is rendering that target
//component
interface IUpdateProps {
    currentUser: Principal | undefined,
    updateUser: UpdateUser | undefined,
    setUpdateUser: (nextUpdateUser: UpdateUser | undefined) => void
}

{/*The only way a CHILD can communicate with parent is by props that passed UP into it,
that allow it call a function that is defined elsewhere. PARENT pass it DOWN */}
function UpdatedUser(props: IUpdateProps) {

    // destructuring assignment
    let [userid, setUserId] = useState('');
    let [username, setUsername] = useState('');
    let [firstname, setFirstame] = useState('');
    let [lastname, setLastname] = useState('');
    let [email, setEmail] = useState('');
    let [isactive, setIsactive] = useState(false);
    let [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    //These are ^^^ are pieces of state that are not passed down
    //to anything

    const navigate = useNavigate();

    let updateUserId = (e: SyntheticEvent) => {
        let userIdVal = (e.target as HTMLInputElement).value;
        console.log(userIdVal);
        setUserId(userIdVal);// Use setters to hold password or username
    }

                 //use arrow => function or function to do the same thing
                //SyntheticEvent Reacts wrapper around a regular old dom event
    let updateUsername = (e: SyntheticEvent) => {
        let usernameVal = (e.target as HTMLInputElement).value;
        console.log(usernameVal);
        // username = usernameVal; // YOU CANNOT UPDATE PIECES OF STATE LIKE THIS
        setUsername(usernameVal);// Use setters to hold password or username
    }

    let updateFirstame = (e: SyntheticEvent) => {
        let firstnameVal = (e.target as HTMLInputElement).value;
        console.log(firstnameVal);
        setFirstame(firstnameVal);// Use setters to hold password or username
    }

    let updateLastname = (e: SyntheticEvent) => {
        let lastnameVal = (e.target as HTMLInputElement).value;
        console.log(lastnameVal);
        setLastname(lastnameVal);// Use setters to hold password or username
    }

                //use arrow => function or function to do the same thing
    let updateIsactive= function(e: SyntheticEvent) {
        let isactiveVal = (e.target as HTMLInputElement).value;
        console.log(isactiveVal);
        if (isactiveVal == 'True'){
            setIsactive(true);
        }
        else { setIsactive(false); }
    }

    let updateRole= function(e: SyntheticEvent) {
        let roleVal = (e.target as HTMLInputElement).value;
        console.log(roleVal);
        setRole(roleVal);
    }

    let updateEmail= function(e: SyntheticEvent) {
        let emailVal = (e.target as HTMLInputElement).value;
        console.log(emailVal);
        setEmail(emailVal);
    }

    let updatePassword = function(e: SyntheticEvent) {
        let passwordVal = (e.target as HTMLInputElement).value;
        console.log(passwordVal);
        setPassword(passwordVal);
    }

    let updateUser = async () => {
        
        // if (!username || !password || !firstname || !lastname || !email || !isactive || !role) {
        //     setErrorMsg('You must fill out all forms!');
        //     return;
        // }
    
        try {
                
            let resp = await findUserAndUpdate({userid, firstname, lastname, email, username, password, isactive,
                role});

            // //Used to FETCH from locolhost
            // let resp = await fetch('http://localhost:8080/p2_foundation',{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({username, password, firstname, lastname, email })
            // }); 

            if (resp.status === 400) {
                setErrorMsg('Invalid username or password provided!');
            }

            if (resp.status === 401) {
                setErrorMsg('No user found with provided credentials!');
            }

            if (resp.status === 200) {
                //let authUser = await resp.data;
                let updatedUser = await resp.data;
                console.log(updatedUser);
                props.setUpdateUser(updatedUser);
                navigate('/login');
            }
            
            //EXPLICT(e:any) any not an implicit(e) any
        } catch (e: any) {
            {/*used for giving any wierd errors(API not running, wont give response at all)*/}
            console.log(e.message);
        }
    

    }

    return (
        // props.updateUser ? <Navigate to="/dashboard"/> :
        <div className='wrapper'>
            <div className='form-wrapper'>
                
                <>
                        <h4>Update a User</h4>
                    <div>                   {/*when this change its handle @ line 35-38*/}
                            <input type="text" id="userId" placeholder="Enter the UserId" onChange={updateUserId}/>
                            <br/><br/>
                            <input type="text" id="firstName" placeholder="Enter the firstname" onChange={updateFirstame}/>
                            <br/><br/>
                            <input type="text" id="lasttName" placeholder="Enter the lastname" onChange={updateLastname}/>
                            <br/><br/>
                            <input type="text" id="email" placeholder="Enter the email" onChange={updateEmail}/>
                            <br/><br/>
                            <input type="text" id="userName" placeholder="Enter the username" onChange={updateUsername}/>
                            <br/><br/>

                            <label htmlFor="isActive">Select is active: </label>
                            <select id="isactive" onChange={updateIsactive}>
                            <option value="active">True</option>
                            <option value="not active">False</option>
                            </select>
                            <p></p>

                            <br/><br/>
                            <input type="text" id="role" placeholder="Enter the role" onChange={updateRole}/>
                            <br/><br/>
                            <input type="password" id="password" placeholder="Enter the password" onChange={updatePassword}/>
                            <br/><br/>
                            <button id="update-button" onClick={updateUser}>Update</button>
                            <br/><br/>
                            
                        </div>

                        {/*true- render this 'errorMessage' or false- render <></>(nothing)
                        renders conditionally and pass down error message that it manage 
                        as piece of state, passing it down into error message component,
                        so it can properly render it to the screen*/}
                        { errorMsg ? <ErrorMessage errorMessage={errorMsg}/> : <></> }
                </>
                </div>
                </div>
    );

}

export default UpdatedUser;


// handleRegister(formValue: { firstname: string, lastname: string, username: string, email: string, password: string }) {
//     const { firstname, lastname, username, email, password } = formValue;
//     this.setState({
//       message: "",
//       successful: false
//     });
//     AuthService.register(
//         firstname,
//         lastname,
//       username,
//       email,
//       password
//     ).then(
//         (      response: { data: { message: any; }; }) => {
//         this.setState({
//           message: response.data.message,
//           successful: true
//         });
//       },
//         (      error: { response: { data: { message: any; }; }; message: any; toString: () => any; }) => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         this.setState({
//           successful: false,
//           message: resMessage
//         });
//       }
//     );
//   }
