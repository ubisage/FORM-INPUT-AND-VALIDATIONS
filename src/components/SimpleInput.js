import { useState,useEffect} from 'react'

const SimpleInput = (props) => {
  // const nameInputRef = useRef()

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false) 
   useEffect (() => {
        if (enteredNameIsValid){
        console.log('naame is valid')
      }
    }, [enteredNameIsValid])
   

  const nameChangeHandler = (event)=>{
    setEnteredName(event.target.value);
  }
  const formSubmissionHandler = (event)=>{
    event.preventDefault();

    setEnteredNameTouched(true)

    if(enteredName.trim() ===''){
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true)

    console.log(enteredName);
    setEnteredName('')
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value=""; 
  }
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameChangeHandler} /> */}
        <input  type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
        {nameInputIsInValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
