import React, {useState} from "react";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.defaultPrevented()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid username and age.'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a age greater than zero.'
            })
            return;
        }

        event.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <form onSubmit={addUserHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                </div>
                <button>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;