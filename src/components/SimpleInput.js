import { useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef()
   const [enteredName, setEnteredName] = useState("");
   const [enteredEmail, setEnteredEmail] = useState("");
   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
   
   const enteredNameIsValid = enteredName.trim() !== '';
   const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

   const enteredEmailIsValid = enteredEmail.includes('@');
   const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;


   
   let formIsValid =false
   //Can add more validities to check below usng &&
   if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid =true;
     }
     
  

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  };
  

  const emailChangeHandler=(event)=>{
    setEnteredEmail(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);


    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value="";
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameChangeHandler} /> */}
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameChangeHandler} /> */}
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInValid && (
          <p className="error-text">Email must include @</p>
        )}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
