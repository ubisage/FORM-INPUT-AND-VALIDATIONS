import {useRef, useState} from 'react'
const SimpleInput = (props) => {
  const nameInputRef = useRef()

  const [enteredName, setEnteredName] = useState('')

  const nameChangeHandler = (event)=>{
    setEnteredName(event.target.value);
  }
  const formSubmissionHandler = (event)=>{
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue);
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
