import React from "react";
import './Style.css';

//Regex for E-mail
//const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
//Regex for Password
//const Regex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");

//modify the React.Component parameters.
//Interfaces that define the props and states for our signup form
interface CreateUserProps 
    {
        name?: any;
        value?: any;
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
                errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
            break;

            //case 'email':
                //errors.email = Regex.test(value)? '': 'Email is not valid!';
            //break;

            case 'password':
                errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
                //errors.password = Regex.test(value)? '': 'Password is not valid!';
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

                  <div className='submit'>
                     <button>Create New</button>
                  </div>
             </form>
         </div>
      </div>
     );
    }

}