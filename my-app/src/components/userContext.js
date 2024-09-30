import React from 'react';

// const UserContext = React.createContext();
const UserContext = React.createContext('Code with me'); /// default value

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
