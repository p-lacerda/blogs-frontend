const useForm = (obj) => {
  const handleChange = (setObject) => (event) => {
    const newObject = { ...obj };
    newObject[event.target.name] = event.target.value;
    setObject(newObject);
  };

  const handleSubmit = (callback) => async (event) => {
    event.preventDefault();
    await callback();
  };

  return [handleChange, handleSubmit];
};

export default useForm;
