import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Principal } from "../models/principal";
import { authenticate } from "../remote/auth-service";
import './Style.css';

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
        name?: any;
        value?: any;

        //createUser: Principal | undefined,
        //setCreateUser: (nextUser: Principal | undefined) => void
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

export class CreateUser extends React.Component<CreateUserProps, CreateUserState>{

    //control the user inputs in our username, email and password fields &
    //store the changes we make to the input fields on change
    handleChange = (event : any) => 
    {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) 
        {
            case 'username':
                console.log ("username is less than 8 char" + value.length)
                //errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
                errors.username = RegexUsername.test(value)? '': 'Username must be 8 characters, include one Number, and Upper and Lower case letters !';
                break;

            case 'email':
                errors.email = RegexEmail.test(value)? '': 'Email is not valid!';
                break;

            case 'password':
            
                console.log ("password is less than 8 char" + value.length)
                //errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
                errors.password = RegexPassword.test(value) ? '': 'Password must have  eight characters, special character, Upper and Lower case letters';
                break;
            
            default:
                break;
        }

        this.setState(Object.assign(this.state, { errors,[name]: value }));
        console.log(this.state.errors);
    }

    constructor(props: CreateUserProps) 
    {
        super(props);
        const initialState = 
        {
            username : '',
            email : '',
            password : '',
            errors : 
            {
                username : '',
                email : '',
                password : ''
            } 
        }

        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        

    }


    handleSubmit = (event : any) => 
    {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        
        if(validity == true)
        {
            console.log("Registering can be done");
        }

        else
        {
            console.log("You cannot be registered!!!")
        }
    }

    render() {
        const {errors} = this.state
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>New User</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='firstName'>
                     <label htmlFor="firstName">First Name</label>
                     <input type='text' name='firstName' onChange= {this.handleChange}/>
                  </div>

                  <div className='LastName'>
                     <label htmlFor="lastName">Last Name</label>
                     <input type='text' name='LastName' onChange= {this.handleChange}/>
                  </div>

                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.handleChange}/>
                     {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
                  </div>

                  <div className='userName'>
                     <label htmlFor="userName">Username</label>
                     <input type='userName' name='userName' onChange={this.handleChange}/>
                     {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
                  </div>

                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                     {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
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

}

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