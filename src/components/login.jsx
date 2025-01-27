import FetchButton from "./FetchButton";
import { useState  } from "react";
import { useNavigate ,useLocation } from "react-router-dom";
import './registForm.css'
import useAuth from "../../auth/authorizer.jsx"
const Login = () => {
const [email,setEmail] = useState("");
const [password, setPassword]=useState("")
const navigate = useNavigate();
const { login } = useAuth();
const { state } = useLocation();

const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('xcvczcvxc'); 
    login().then(() => {
      navigate(state?.path || "/dashboard");
      console.log('vamos al dashboard', state)
       navigate("/dashboard")
    });
};

const validateForm = () =>
{
    return (email&&password)
}

  return (
    <>
      <div>
<div className="container">
<form onSubmit={handleLogin}>
<div className="form-container2">
<h2>Log in</h2>
<img src="../src/assets/farmLogo.png" alt="Description of Image"/>
    </div>
    <div className="form-container">
    <label>Email</label>
    <input maxLength={30} value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>

    <div className="form-container">
    <label>Password</label>
    <input maxLength={30} value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
    </div>
    <button type="submit" onClick={handleLogin} disabled={!validateForm()}>
    Log in
    </button>
</form>
</div>
      </div>
    </>
  );
};

export default Login;