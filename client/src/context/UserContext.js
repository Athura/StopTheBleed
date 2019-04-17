import React from 'react';

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

// Everytime we want to use this provider we just wrap the component
// in a UserWrapper
export default function UserWrapper({ children }) {
    return (
        <UserProvider>
            <>
                {children}
            </>
        </UserProvider>
    )
}