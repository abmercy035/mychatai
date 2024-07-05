/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const UserContext = createContext(undefined);
// const UserDispatchContext = createContext(undefined);
const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);

    const headerOpt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }


    return (
        <UserContext.Provider value={{ username, setUsername, headerOpt }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };