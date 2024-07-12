import { useMemo } from 'react';
import { useState, useEffect } from 'react';

export const useForm = ( initialForm = {}, validations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [validation, setValidation]= useState({})

    useEffect(()=>{
        createValidators();
    }, [formState]);

    const isFormValid = useMemo(()=>{
        for (const formValue of Object.keys(validation)){
            if(validation[formValue] !== null) return false; 
        }
        return true;
    }, [validation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators= ()=>{
        const checkValues= {};
      for(const formField of Object.keys(validations)){
        const [fn, errorMessage] = validations[formField];
        checkValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
      }
      setValidation(checkValues);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...validation,
        isFormValid,
     }
}