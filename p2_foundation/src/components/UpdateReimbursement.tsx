import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isDate } from "util/types";
import { Principal } from "../models/principal";
import { Reimbursement } from "../models/reimbursement";
import { makeReimbursement } from "../remote/reimbursement-service";
import ErrorMessage from "./ErrorMessage";




interface IUpdateProps {
    currentUser: Principal | undefined,
    updateReimbursment: Reimbursement | undefined,
    setUpdateReimbursement: (nextUpdateReimbursment: Reimbursement | undefined) => void


}

function UpdatedReimbursement(props: IUpdateProps) {

    let [id, setId] = useState('');
    let [amount, setAmount] = useState(Number);
    let [submitted, setSubmitted] = useState('');
    let [resolved, setResolved] = useState('');
    let [description, setDescription] = useState('');
    // let [payment_Id, setPaymentId] = useState('');
    let [author_Id, setAuthorId] = useState('');
    let [resolver_Id, setResolverId] = useState('');
    let [status_Id, setStatusId] = useState('');
    let [type_Id, setTypeId] = useState('');


    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();


    let updateId = (e: SyntheticEvent) => {
        let IdVal = (e.target as HTMLInputElement).value;
        console.log(IdVal);
        setId(IdVal);// Use setters to hold password or username
    }

                 //use arrow => function or function to do the same thing
                //SyntheticEvent Reacts wrapper around a regular old dom event
    let updateAmount = (e: SyntheticEvent) => {
        let amountVal = (e.target as HTMLInputElement).value;
        console.log(amountVal);
        // username = usernameVal; // YOU CANNOT UPDATE PIECES OF STATE LIKE THIS
        setAmount(parseInt(amountVal, 10));// Use setters to hold password or username
    }

    let updateSubmitted = (e: SyntheticEvent) => {
        let submittedVal = (e.target as HTMLInputElement).value;
        console.log(submittedVal);
        setSubmitted(submittedVal);// Use setters to hold password or username
        
    }

    let updateResolved = (e: SyntheticEvent) => {
        let resolvedVal = (e.target as HTMLInputElement).value;
        console.log(resolvedVal);
        setResolved(resolvedVal);
        // setResolved(resolvedVal);// Use setters to hold password or username
        
    }

    let updateDescription = (e: SyntheticEvent) => {
        let descriptionVal = (e.target as HTMLInputElement).value;
        console.log(descriptionVal);
        setDescription(descriptionVal);// Use setters to hold password or username
    }

    //              //use arrow => function or function to do the same thing
    //             //SyntheticEvent Reacts wrapper around a regular old dom event
    // let updatePaymentId = (e: SyntheticEvent) => {
    //     let paymentIdVal = (e.target as HTMLInputElement).value;
    //     console.log(paymentIdVal);
    //     // username = usernameVal; // YOU CANNOT UPDATE PIECES OF STATE LIKE THIS
    //     setPaymentId(paymentIdVal);// Use setters to hold password or username
    // }

    let updateAuthorId = (e: SyntheticEvent) => {
        let AuthorIdVal = (e.target as HTMLInputElement).value;
        console.log(AuthorIdVal);
        setAuthorId(AuthorIdVal);// Use setters to hold password or username
    }

    let updateResolverId = (e: SyntheticEvent) => {
        let resolverIdVal = (e.target as HTMLInputElement).value;
        console.log(resolverIdVal);
        setResolverId(resolverIdVal);// Use setters to hold password or username
    }

    let updateStatusId = (e: SyntheticEvent) => {
        let statusIdVal = (e.target as HTMLInputElement).value;
        console.log(statusIdVal);
        setStatusId(statusIdVal);// Use setters to hold password or username
    }

                 //use arrow => function or function to do the same thing
                //SyntheticEvent Reacts wrapper around a regular old dom event
    let updateTypeId = (e: SyntheticEvent) => {
        let typeIdVal = (e.target as HTMLInputElement).value;
        console.log(typeIdVal);
        // username = usernameVal; // YOU CANNOT UPDATE PIECES OF STATE LIKE THIS
        setTypeId(typeIdVal);// Use setters to hold password or username
    }


    let updateReimbursement = async () => {
        
        // if (!username || !password || !firstname || !lastname || !email || !isactive || !role) {
        //     setErrorMsg('You must fill out all forms!');
        //     return;
        // }
    
        try {
                
            let resp = await makeReimbursement({id, amount, submitted, resolved, description, author_Id, 
                resolver_Id, status_Id, type_Id});

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
                //setErrorMsg('Invalid username or password provided!');
            }

            if (resp.status === 401) {
                //setErrorMsg('No user found with provided credentials!');
            }

            if (resp.status === 200) {
                //let authUser = await resp.data;
                let updatedUser = await resp.data;
                console.log(updatedUser);
                props.setUpdateReimbursement(updatedUser);
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
                        <h4>Update reimbursement</h4>
                        <div>                   {/*when this change its handle @ line 35-38*/}
                            <input type="text" id="id" placeholder="Enter the id" onChange={updateId}/>
                            <br/><br/>
                            <input type="text" id="amount" placeholder="Enter the amount" onChange={updateAmount}/>
                            <br/><br/>
                            

                            
                            <input type="text" id="submitted" placeholder="Time submitted" onChange={updateSubmitted}/>
                            <br/><br/>
                            <input type="text" id="resolved" placeholder="Timeresolved" onChange={updateResolved}/>
                            <br/><br/>
                            <input type="text" id="description" placeholder="Enter the description" onChange={updateDescription}/>
                            <br/><br/>
 
 
                            <input type="text" id="authorId" placeholder="Enter author Id" onChange={updateAuthorId}/>
                            <br/><br/>
                            <input type="password" id="resolverId" placeholder="Enter resolver Id" onChange={updateResolverId}/>
                            <br/><br/>
                            <input type="text" id="statusId" placeholder="Enter status Id" onChange={updateStatusId}/>
                            <br/><br/>
                            <input type="text" id="typeId" placeholder="Enter type Id" onChange={updateTypeId}/>
                            <br/><br/>
                            <button id="update-button" onClick={updateReimbursement}>Update</button>
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


export default UpdatedReimbursement;
