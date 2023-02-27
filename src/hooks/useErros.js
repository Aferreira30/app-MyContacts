import {useState} from "react";

export default function useErrors(){
  const [errors,setErrors]=useState([]);

  function setError({field,message}){
    const errorAlreadyExitis = errors.find((error)=> error.filed === field)

    if(errorAlreadyExitis){
      return;
    };

      setErrors((prevState)=>[
        ...prevState,
        {field, message},
      ]);
  }

  function removeError(fieldName){
    setErrors((prevState)=> prevState.filter(
      (error) => error.field !== fieldName,
    ))
  }

  function getErrorMenssageByFieldName(fieldName){
    return errors.find((error)=> error.field === fieldName)?.message;
  };


  return {
    setError,
    removeError,
    getErrorMenssageByFieldName,
    errors
  };
}