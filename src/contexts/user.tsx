import React from "react";

interface UserType {
  name: string;
  email: string;
  password: string;
};

interface UserContextProps {
  user: UserType;
  signUp: (name: string, email: string, password: string) => void;
  signIn: (email: string, password: string) => (UserType | void);
  logoff: () => void;
};

interface UserProviderProps {
  children?: React.ReactNode;
}

const BLANK_USER = { name: "", email: "", password: "" };

const DEFAULT_VALUE = {
  user: BLANK_USER,
  signUp: () => {},
  signIn: () => (BLANK_USER),
  logoff: () => {},
};

export const UserContext = React.createContext<UserContextProps>(DEFAULT_VALUE);

export const UserProvider: React.FC <UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<UserType[]>([]);
  const [user, setUser] = React.useState<UserType>(BLANK_USER);

  const signUp = (name: string, email: string, password: string) => {
    const newUser = {
      name,
      email,
      password,
    };
    const usersArray = [...users];
    usersArray.push(newUser);
    setUsers(usersArray);
  };

  const signIn = (email: string, password: string) => {
    const actualUser = users.filter(user => user.email === email && user.password === password);

    if (actualUser[0]) {
      setUser(actualUser[0]);
      return user;
    } else
      alert("Error, invalid user");
  };

  const logoff = () => {
    setUser(BLANK_USER);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signUp,
        signIn,
        logoff,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};