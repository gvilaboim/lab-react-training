import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupPage = () => {

   const [email, setEmail ] = useState('')
   const  [password, setPassword] = useState('')
   const [nationality, setNationality] = useState('')

   const handleClick = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Nationality: ${nationality}`);
     const myUsers = document.querySelector('#users');
     
     const myDiv = document.createElement('div');
    let saud ='';
    if(nationality === 'en')
    {
        saud="Hello";
    }
    else if ( nationality === 'de')
    {
        saud="Hallo";

    } else if ( nationality === 'fr')
    {
        saud="Bonjour";

    }

     myDiv.innerHTML = `
     <p> ${saud} </p>
     <p> Your email address is: ${email}</p>
     `;


     myUsers.appendChild(myDiv);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <div>
      <span> Email</span>  <input type="email" value={email} onChange={handleEmailChange}></input>
      <span> Password</span> <input type="password" value={password} onChange={handlePasswordChange} ></input>
      <span> Nationality</span>  <select  value={nationality} onChange={handleNationalityChange}>
  <option value="en">en</option>
  <option value="de">de</option>
  <option value="fr">fr</option>
</select>
<button onClick={handleClick}>Sign up</button> 

<div id="users">

</div>

   </div>
  )
}

export default SignupPage