// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";
// import React, { useState, useEffect, useCallback } from 'react';

// export const useForm = (asyncFunction, immediate = true) => {
//     const [pending, setPending] = useState(false);
//     const [value, setValue] = useState(null);
//     const [error, setError] = useState(null);
  
//     // The execute function wraps asyncFunction and
//     // handles setting state for pending, value, and error.
//     // useCallback ensures the below useEffect is not called
//     // on every render, but only if asyncFunction changes.
//     const execute = useCallback(() => {
//       setPending(true);
//       setValue(null);
//       setError(null);
//       return asyncFunction()
//         .then(response => setValue(response))
//         .catch(error => setError(error))
//         .finally(() => setPending(false));
//     }, [asyncFunction]);
  
//     // Call execute if we want to fire it right away.
//     // Otherwise execute can be called later, such as
//     // in an onClick handler.
//     useEffect(() => {
//       if (immediate) {
//         execute();
//       }
//     }, [execute, immediate]);
  
//     return { execute, pending, value, error };
//   };

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
      console.log(e.target);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const clearForm = e => {
    if (e) e.preventDefault();
    setValues(initialValue);
  };

  return [values, handleChanges, clearForm];
};
