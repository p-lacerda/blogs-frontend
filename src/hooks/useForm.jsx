import { useState } from 'react';

const useForm = () => {
  const [user, setUserInfo] = useState({
    name: '',
  });

  const handleChange = (event) => {
    const userObject = { ...user };
    userObject[event.target.name] = event.target.value;
    setUserInfo(userObject);
  };

  const handleSubmit = (callback) => async (event) => {
    event.preventDefault();
    await callback();
  };

  return [{ user }, handleChange, handleSubmit];
};

export default useForm;
