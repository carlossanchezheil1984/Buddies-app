import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {

  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    birthDate: "",
    email: "",
    hobbies: "",
    hometown: ""
  });

  //getting the values

  const onChange = (e) => {
    let data = {...state};
    data[e.target.name] = e.target.value;
    setState(data);
  };
  const storeDataInDatabase = (data) => {
    localStorage.setItem('form_data', JSON.stringify(data));
    const myObjStr =  JSON.parse(localStorage.getItem('form_data'));
    console.log(myObjStr);
    history.push('/ThankYou');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    storeDataInDatabase(state);
  }

  //form function
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name"> Naam en achternaam </label>
      <input
      name="name"
      placeholder="Naam"
      value={state.name}
      onChange={onChange}
      required/>

      <label htmlFor="birthDate"> Geboortedatum </label>
      <input
      type="date"
      name="birthDate"
      placeholder="geboortedatum"
      value={state.birthDate}
      onChange={onChange}
      required/>

      <label htmlFor="email">Email</label>
      <input
      type="email"
      name= "email"
      placeholder="email"
      value={state.email}
      onChange={onChange}
      required/>

      <label htmlFor="hometown"> Geboorteplaats</label>
      <input
      name= "hometown"
      placeholder="geboorteplaats"
      value={state.hometown}
      onChange={onChange}
      required/>

      <label htmlFor="hobbies">Hobby's en interesses</label>
      <textarea
      name= "hobbies"
      placeholder="hobby's en interesses"
      value={state.hobbies}
      onChange={onChange}
      required/>

      <button type="submit" className="big-button">Indienen</button>
    </form>
  )
}

export default RegisterForm;