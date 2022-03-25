import { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Principal } from "../models/principal";
import { User } from "../models/user";
import { authenticate } from "../remote/auth-service";
import { register } from "../remote/user-service";
import ErrorMessage from "./ErrorMessage";
import './Style.css';


//Props are peices of data that are passed into component as 
//attributes from some component that is rendering that target
//component
interface IRegisterProps {
    registerUser: User | undefined,
    setRegisterUser: (nextUser: User | undefined) => void
}

{/*The only way a CHILD can communicate with parent is by props that passed UP into it,
that allow it call a function that is defined elsewhere. PARENT pass it DOWN */}
function Register(props: IRegisterProps) {

    // destructuring assignment
    let [username, setUsername] = useState('');
    let [firstname, setFirstame] = useState('');
    let [lastname, setLastname] = useState('');
    let [email, setEmail] = useState('');
    

    const [password, setPassword] = useState<string | number>();
    const [errorMsg, setErrorMsg] = useState('');
    //These are ^^^ are pieces of state that are not passed down
    //to anything

    const navigate = useNavigate();


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

    let registerUser = async () => {
        
        if (!username || !password || !firstname || !lastname || !email) {
            setErrorMsg('You must provide a username, password, firstname, lastname and email!');
            return;
        }

        try {

            let resp = await register({username, password, lastname, firstname, email });

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
                let newUser = await resp.data;
                console.log(newUser);
                props.setRegisterUser(newUser);
                navigate('/login');
            }
            
            //EXPLICT(e:any) any not an implicit(e) any
        } catch (e: any) {
            {/*used for giving any wierd errors(API not running, wont give response at all)*/}
            console.log(e.message);
        }

    }

    return (
        props.registerUser ? <Navigate to="/login"/> :
        <div className='wrapper'>
            <div className='form-wrapper'>
                
                <>
                        <h4>Register a New User</h4>
                    <div>                   {/*when this change its handle @ line 35-38*/}
                            <input type="text" id="firstName" placeholder="Enter your firstname" onChange={updateFirstame}/>
                            <br/><br/>
                            <input type="text" id="lasttName" placeholder="Enter your lastname" onChange={updateLastname}/>
                            <br/><br/>
                            <input type="text" id="email" placeholder="Enter your email" onChange={updateEmail}/>
                            <br/><br/>
                            <input type="text" id="userName" placeholder="Enter your username" onChange={updateUsername}/>
                            <br/><br/>
                            <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
                            <br/><br/>
                            <button id="login-button" onClick={registerUser}>Login</button>
                            <br/><br/>

                            

                            <div id='register-link'>
                                <Link id='register' to ='/register'>
                                    <button id="register" onClick={registerUser}>Register</button>
                                </Link>
                            </div>
                            
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

export default Register;