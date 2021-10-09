import React, { useState } from "react";

export const useForm = (initialValue) => {
   const [values, setValues] = useState(initialValue);

   const handleChanges = e => {
       setValues({ ...values, [e.target.name]: e.target.value});
   };

   const clearValue = () => {
       setValues(initialValue);
   };

   return [values, handleChanges, clearValue];

};