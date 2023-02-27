import { Form, ButtonContainer} from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import IsEmailValid from "../../utils/isEmalValide";
import formatPhone from "../../utils/fomrtPhone";

import useErrors from "../../hooks/useErros";

import { useState } from "react";

export default function ConatctForm({ buttonlabel }){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [category,setCategory] = useState('');

  const {
     errors,
     setError,
     removeError,
     getErrorMenssageByFieldName,
        }=useErrors();


  const isFormValid = (name && errors.length === 0);


  function handSubmit(event){
    event.preventDefault();
    console.log(
      {name, email, phone: phone.replace(/\D/g, ''), category}
    )
  };

  function handleNameChange(event){
     setName(event.target.value);

     if(!event.target.value){
       setError({field:'name', message: "Nome é obrigatório."})
     } else {
       removeError('name')
     }
  };

  function handleEmailChange(event){
    setEmail(event.target.value);

    if(event.target.value && !IsEmailValid(event.target.value)){
      setError({field:'email', message: "E-mail inválido."})
   }else{
      removeError('email')
    }
  };

  function handlePhoneChange(event){
    setPhone(formatPhone(event.target.value))
  }

  return (

    <Form onSubmit={handSubmit} noValidate>
      <FormGroup error={getErrorMenssageByFieldName('name')}>
         <Input error={getErrorMenssageByFieldName('name')}  placeholder="Nome *" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup error={getErrorMenssageByFieldName('email')}>
         <Input type="email" error={getErrorMenssageByFieldName('email')} placeholder="E-mail" value={email} onChange={handleEmailChange} />
      </FormGroup>

      <FormGroup>
         <Input placeholder="Telefone" value={phone} onChange={handlePhoneChange} maxLength="15"/>
      </FormGroup>

      <FormGroup>
         <Select value={category} onChange={(e)=> setCategory(e.target.value)} >
            <option value="">Categoria</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
         </Select>
      </FormGroup>

    <ButtonContainer>
      <Button type="submit" disabled={!isFormValid}>
        {buttonlabel}
      </Button>
    </ButtonContainer>
    </Form>


  )
}