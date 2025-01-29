import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./registForm.css";
import useAuth from "../../auth/authorizer.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5006/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status == "200") {
        login().then(() => {
          navigate(state?.path || "/dashboard");
        });
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const validateForm = () => {
    return email && password;
  };
  return (
    <>
      <div>
        <div className="container">
          <form onSubmit={handleLogin}>
            <div className="form-container2">
              <h2>Log in</h2>
              <img
                src="../src/assets/farmLogo.png"
                alt="Description of Image"
              />
            </div>
            <div className="form-container">
              <label>Email</label>
              <input
                maxLength={30}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-container">
              <label>Password</label>
              <input
                maxLength={30}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              disabled={!validateForm()}
            >
              Log in
            </button>
          </form>
        </div>
        <Link to="/register">Don&#39;t have an account?</Link>
      </div>
    </>
  );
};

export default Login;
