import { useState, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    cardName: '',
    cardNumber: '',
    cardExpDate: '',
    cardCvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const resetUserData = () => {
    setUserData({});
    setErrors({});
  };

  return (
    <UserContext.Provider
      value={{
        handleChange,
        userData,
        errors,
        setErrors,
        setUserData,
        resetUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
