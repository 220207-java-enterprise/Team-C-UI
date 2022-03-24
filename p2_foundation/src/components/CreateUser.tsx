
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { register } from "../remote/user-service";
import ErrorMessage from "./ErrorMessage";
import './Style.css';
import { User } from "../models/user";
import React, { SyntheticEvent, useState } from "react";

//Regex for E-mail
const RegexEmail = RegExp("^[^@\\s]+@[^@\\s.]+\\.[^@.\\s]+$");
//Regex for Password
const RegexPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
//
const RegexUsername =RegExp("^[a-zA-Z0-9]{8,25}/");

   
//modify the React.Component parameters.
//Interfaces that define the props and states for our signup form
interface CreateUserProps 
    {
        createUser: User | undefined,
        setCreateUser: (nextUser: User | undefined) => void
    }

//State property that stores its error in each field
//interfaces that define the props and states for our signup form
 interface CreateUserState 
    {
        username : string,
        email : string,
        password : string,
        errors : {
            username :  string,
            email : string,
            password : string
        }
    }

    function CreateUser(props: CreateUserProps) {
        
        const [username, setUsername] = useState('');
        //        ^          ^         usestate is a HOOK
        //      state      setter (for updating the state variable)

                                //Generic- allows to take a string,number or undefined
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [errorMsg, setErrorMsg] = useState('');

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
        let updateEmail = (e: SyntheticEvent) => {
            let emailVal = (e.target as HTMLInputElement).value;
            console.log(emailVal);
            setEmail(emailVal);
        }

                    //use arrow => function or function to do the same thing
        let updateFirstname = function(e: SyntheticEvent) {
            let firstnameVal = (e.target as HTMLInputElement).value;
            console.log(firstnameVal);
            setFirstname(firstnameVal);
        }

        let updateLastname = function(e: SyntheticEvent) {
            let lastnameVal = (e.target as HTMLInputElement).value;
            console.log(lastnameVal);
            setLastname(lastnameVal);
        }



        let registerUser = async () => {
            if (!username || !password || email || firstname || lastname) {
                setErrorMsg('You must fill all fields!');
                return;
            }
            try {

                let resp = await register({username, password, email, firstname, lastname});

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
                    console.log(username);
                }
                
                //EXPLICT(e:any) any not an implicit(e) any
            } catch (e: any) {
                {/*used for giving any wierd errors(API not running, wont give response at all)*/}
                console.log(e.message);
            }

        }
        
        return (
            props.createUser ? <Navigate to="/login"/>:
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>New User</h2>
               <form onSubmit={registerUser} noValidate >
                  <div className='firstName'>
                     <label htmlFor="firstName">First Name</label>
                     <input type='text' name='firstName' onChange= {updateFirstname}/>
                  </div>

                  <div className='LastName'>
                     <label htmlFor="lastName">Last Name</label>
                     <input type='text' name='LastName' onChange= {updateLastname}/>
                  </div>

                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={updateEmail}/>
                  </div>

                  <div className='userName'>
                     <label htmlFor="userName">Username</label>
                     <input type='userName' name='userName' onChange={updateUsername}/>
                  </div>

                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={updatePassword}/>
                  </div> 

                  <div className='createUser-btn'>
                     <button>Create New</button>
                  </div>

                  <div className='login-btn'>
                    <Link to='/Login'>
                        <button type="button">Login</button>
                    </Link>
                 </div>

                  
             </form>
         </div>
      </div>
     );
    }
            
    
export default CreateUser;

// export class CreateUser extends React.Component<CreateUserProps, CreateUserState>{


//     newUser = (event : any) => {
        
//         const [username, setUsername] = useState('');
//         //        ^          ^         usestate is a HOOK
//         //      state      setter (for updating the state variable)

//                                 //Generic- allows to take a string,number or undefined
//         const [password, setPassword] = useState('');
//         const [email, setEmail] = useState('');
//         const [firstname, setFirstname] = useState('');
//         const [lastname, setLastname] = useState('');
//         const [errorMsg, setErrorMsg] = useState('');

//             const navigate = useNavigate();


//                     //use arrow => function or function to do the same thing
//                     //SyntheticEvent Reacts wrapper around a regular old dom event
//         let updateUsername = (e: SyntheticEvent) => {
//             let usernameVal = (e.target as HTMLInputElement).value;
//             console.log(usernameVal);
//             // username = usernameVal; // YOU CANNOT UPDATE PIECES OF STATE LIKE THIS
//             setUsername(usernameVal);// Use setters to hold password or username
//         }

//                     //use arrow => function or function to do the same thing
//         let updatePassword = function(e: SyntheticEvent) {
//             let passwordVal = (e.target as HTMLInputElement).value;
//             console.log(passwordVal);
//             setPassword(passwordVal);
//         }
//         let updateEmail = (e: SyntheticEvent) => {
//             let emailVal = (e.target as HTMLInputElement).value;
//             console.log(emailVal);
//             setEmail(emailVal);
//         }

//                     //use arrow => function or function to do the same thing
//         let updateFirstname = function(e: SyntheticEvent) {
//             let firstnameVal = (e.target as HTMLInputElement).value;
//             console.log(firstnameVal);
//             setFirstname(firstnameVal);
//         }

//         let updateLastname = function(e: SyntheticEvent) {
//             let lastnameVal = (e.target as HTMLInputElement).value;
//             console.log(lastnameVal);
//             setLastname(lastnameVal);
//         }

//         let registerUser = async () => {
//             if (!username || !password || email || firstname || lastname) {
//                 setErrorMsg('You must fill all fields!');
//                 return;
//             }
//             try {

//                 let resp = await register({username, password, email, firstname, lastname});
    
//                 //Used to FETCH from locolhost
//                 {/*let resp = await fetch('http://localhost:8080/quizzad',{
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     },
//                     body: JSON.stringify({username, password})
//                 }); */}
    
//                 if (resp.status === 400) {
//                     setErrorMsg('Invalid username or password provided!');
//                 }
    
//                 if (resp.status === 401) {
//                     setErrorMsg('No user found with provided credentials!');
//                 }
    
//                 if (resp.status === 200) {
//                     //let authUser = await resp.data;
//                     console.log(username);
//                 }
                
//                 //EXPLICT(e:any) any not an implicit(e) any
//             } catch (e: any) {
//                 {/*used for giving any wierd errors(API not running, wont give response at all)*/}
//                 console.log(e.message);
//             }
    
//         }
            
//     }

    

    
//     //control the user inputs in our username, email and password fields &
//     //store the changes we make to the input fields on change
//     handleChange = (event : any) => 
//     {
//         event.preventDefault();
//         const { name, value } = event.target;
//         let errors = this.state.errors;
//         switch (name) 
//         {
//             case 'username':
//                 console.log ("username is less than 8 char" + value.length)
//                 //errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
//                 errors.username = RegexUsername.test(value)? '': 'Username must be 8 characters, include one Number, and Upper and Lower case letters !';
//                 break;

//             case 'email':
//                 errors.email = RegexEmail.test(value)? '': 'Email is not valid!';
//                 break;

//             case 'password':
            
//                 console.log ("password is less than 8 char" + value.length)
//                 //errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
//                 errors.password = RegexPassword.test(value) ? '': 'Password must have  eight characters, special character, Upper and Lower case letters';
//                 break;
            
//             default:
//                 break;
//         }

//         this.setState(Object.assign(this.state, { errors,[name]: value }));
//         console.log(this.state.errors);
//     }

//     constructor(props: CreateUserProps) 
//     {

//         super(props);
//         const initialState = 
//         {
//             username : '',
//             email : '',
//             password : '',
//             firstname: '',
//             lastname: '',
//             errors : 
//             {
//                 username : '',
//                 email : '',
//                 password : ''
//             } 
//         }

//         this.state = initialState;
//         this.handleChange = this.handleChange.bind(this);
        

//     }


//     handleSubmit = (event : any) => 
//     {
//         event.preventDefault();
//         let validity = true;
//         Object.values(this.state.errors).forEach(
//             (val) => val.length > 0 && (validity = false)
//         );
        
//         if(validity === true)
//         {
//             console.log("Registering can be done");
//             this.newUser.bind
//         }

//         else
//         {
//             console.log("You cannot be registered!!!")
//         }
//     }

//     render() {
//         const {errors} = this.state
//         return (
//           <div className='wrapper'>
//             <div className='form-wrapper'>
//                <h2>New User</h2>
//                <form onSubmit={this.handleSubmit} noValidate >
//                   <div className='firstName'>
//                      <label htmlFor="firstName">First Name</label>
//                      <input type='text' name='firstName' onChange= {this.handleChange}/>
//                   </div>

//                   <div className='LastName'>
//                      <label htmlFor="lastName">Last Name</label>
//                      <input type='text' name='LastName' onChange= {this.handleChange}/>
//                   </div>

//                   <div className='email'>
//                      <label htmlFor="email">Email</label>
//                      <input type='email' name='email' onChange={this.handleChange}/>
//                      {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
//                   </div>

//                   <div className='userName'>
//                      <label htmlFor="userName">Username</label>
//                      <input type='userName' name='userName' onChange={this.handleChange}/>
//                      {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
//                   </div>

//                   <div className='password'>
//                      <label htmlFor="password">Password</label>
//                      <input type='password' name='password' onChange={this.handleChange}/>
//                      {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
//                   </div> 

//                   <div className='createUser-btn'>
//                      <button>Create New</button>
//                   </div>

//                   <div className='login-btn'>
//                     <Link to='/Login'>
//                         <button type="button">Login</button>
//                     </Link>
//                  </div>

                  
//              </form>
//          </div>
//       </div>
//      );
//     }
    

// }
