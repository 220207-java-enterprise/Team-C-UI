import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Principal } from "../models/principal";
import { authenticate } from "../remote/auth-service";
import ErrorMessage from "./ErrorMessage";


//Props are peices of data that are passed into component as 
//attributes from some component that is rendering that target
//component
interface ILoginProps {
    currentUser: Principal | undefined,
    setCurrentUser: (nextUser: Principal | undefined) => void
}

{/*The only way a CHILD can communicate with parent is by props that passed UP into it,
that allow it call a function that is defined elsewhere. PARENT pass it DOWN */}
function Login(props: ILoginProps) {

    // destructuring assignment
    let [username, setUsername] = useState('');
    //        ^          ^         usestate is a HOOK
    //      state      setter (for updating the state variable)

                            //Generic- allows to take a string,number or undefined
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

                //use arrow => function or function to do the same thing
    let updatePassword = function(e: SyntheticEvent) {
        let passwordVal = (e.target as HTMLInputElement).value;
        console.log(passwordVal);
        setPassword(passwordVal);
    }

    let login = async () => {
        
        if (!username || !password) {
            setErrorMsg('You must provide a username and password!');
            return;
        }

        try {

            let resp = await authenticate({username, password});

            //Used to FETCH from locolhost
            {/*let resp = await fetch('http://localhost:8080/quizzad',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({username, password})
            }); */}

            if (resp.status === 400) {
                setErrorMsg('Invalid username or password provided!');
            }

            if (resp.status === 401) {
                setErrorMsg('No user found with provided credentials!');
            }

            if (resp.status === 200) {
                //let authUser = await resp.data;
                let authUser = await resp.data;
                console.log(authUser);
                props.setCurrentUser(authUser);
                navigate('/dashboard');
            }
            
            //EXPLICT(e:any) any not an implicit(e) any
        } catch (e: any) {
            {/*used for giving any wierd errors(API not running, wont give response at all)*/}
            console.log(e.message);
        }

    }

    return (
        props.currentUser ? <Navigate to="/dashboard"/> : 
        <>
            <h4>Log into your account</h4>
            <div>                   //when this change its handle @ line 35-38
                <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
                <br/><br/>
                <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
                <br/><br/>
                <button id="login-button" onClick={login}>Login</button>
                <br/><br/>
            </div>

            //true- render this 'errorMessage' or false- render <></>(nothing)
            //renders conditionally and pass down error message that it manage 
            //as piece of state, passing it down into error message component,
            //so it can properly render it to the screen
            { errorMsg ? <ErrorMessage errorMessage={errorMsg}/> : <></> }
        </>
    );

}

export default Login;