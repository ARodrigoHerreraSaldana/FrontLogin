import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import FormRegistrationApp from './components/registerForm.jsx';
import Login from './components/login.jsx';
import { AuthProvider } from '../auth/authorizer.jsx';
import Hello from './components/hello.jsx';
import RequireAuth from './components/RequireAuth.jsx';
function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<FormRegistrationApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element=
            {<RequireAuth>
             <Hello /> 
            </RequireAuth>
            }/>
            
          </Routes>
        </div>
      </Router>
    );
  }


export default App
