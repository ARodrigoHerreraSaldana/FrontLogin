import FetchButton from "./FetchButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registForm.css'

const FormRegistrationApp = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email,setEmail] = useState("");
const [password, setPassword]=useState("")
const [occupation, setOccupation]=useState("")

const navigate = useNavigate()


const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
        // Post the form data to the API
        const response = await fetch('http://localhost:5006/newUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstName:"hey",
            lastName:"sdfasdf",
            occupation:"engineer",
            email:"johanesgnsndf@gmail.com",
            password:"asdfasdfsadf"  }),
        });
        if(response=='ok')
        {
            navigate("/login");
        }
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Parse the JSON response
        const result = await response.json();
        setMessage('Login successful!'); // Set a success message or handle the response as needed
  
        // Handle successful response (e.g., navigate to another page, update UI)
        console.log('Form submitted successfully:', result);
  
      } catch (error) {
    
        console.error('There was an error!', error);
      }
    
  }; 

const clearForm= () =>
{
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setOccupation('');
}

const validateForm = () =>
{
    return (firstName&&lastName&&email&&occupation&&password)
}

  return (
    <>
      <div>
<FetchButton></FetchButton>
<div className="container">
<form onSubmit={handleSubmit}>
<div className="form-container2">
<h2>Sign up </h2>
<img src="../src/assets/farmLogo.png" alt="Description of Image"/>
    </div>
    <div className="form-container">
    <label>First Name</label>
    <input maxLength={30} value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
    </div>
    <div className="form-container">
    <label>Last Name</label>
    <input maxLength={30} value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
    </div>
    <div className="form-container">
    <label>Email</label>
    <input maxLength={30} value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>
    <div className="form-container">
    <label>Occupation</label>
    <input maxLength={30} value={occupation} onChange={(e)=>{setOccupation(e.target.value)}}></input>
    </div>
    <div className="form-container">
    <label>Password</label>
    <input maxLength={30} value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
    </div>
    <button type="submit" disabled={!validateForm()}>
    Create account
    </button>
</form>
</div>
      </div>
    </>
  );
};

export default FormRegistrationApp;
