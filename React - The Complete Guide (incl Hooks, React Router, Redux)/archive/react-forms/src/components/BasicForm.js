import useInput from "../hooks/useInput";

const BasicForm = (props) => {
    const {
        value: firstName,
        isValid: firstNameIsValid,
        isInvalid: firstNameIsInvalid,
        onChange: firstNameChangeHandler,
        onBlur: firstNameBlurHandler,
        reset: resetFirstName
    } = useInput(value => value !== '')

    const {
        value: lastName,
        isValid: lastNameIsValid,
        isInvalid: lastNameIsInvalid,
        onChange: lastNameChangeHandler,
        onBlur: lastNameBlurHandler,
        reset: resetLastName
    } = useInput(value => value !== '')

    const {
        value: email,
        isValid: emailIsValid,
        isInvalid: emailIsInvalid,
        onChange: emailChangeHandler,
        onBlur: emailBlurHandler,
        reset: resetEmail
    } = useInput(value => value !== '' && value.includes('@'))

    let formIsValid = false

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true
    } else {
        formIsValid = false
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        if(!formIsValid) {
            return
        }
        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const firstNameInputClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control'
    const lastNameInputClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
              value={firstName}
              type='text'
              id='firstName'
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
          />
            {firstNameIsInvalid && <p className='error-text'>First name must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
            <input
                value={lastName}
                type='text'
                id='lastName'
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
            />
            {lastNameIsInvalid && <p className="error-text">Last name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
          <input
              value={email}
              type='text'
              id='email'
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
          />
          {emailIsInvalid && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
