//Defining the error message
interface IErrorMessage {
    errorMessage: string
}

//These error message take in props
//Renders out props
//Props are peices of data that are passed into component as 
//attributes from some component that is rendering that target
//component
function ErrorMessage(props: IErrorMessage) {
    return (<p className="alert">{props.errorMessage}</p>)
}

export default ErrorMessage;
