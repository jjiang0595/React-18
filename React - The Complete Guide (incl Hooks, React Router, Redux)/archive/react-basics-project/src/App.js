import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        console.log("RECEIVED", uName, uAge)
        setUsersList((newUser) => {
            return [
                ...newUser, {name: uName, age: uAge, id: Math.random().toString()}
            ]
        })
        console.log(usersList)
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UsersList users={usersList}></UsersList>
        </div>
    );
}

export default App;
