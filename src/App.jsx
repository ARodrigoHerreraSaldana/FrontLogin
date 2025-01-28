import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import FormRegistrationApp from './components/registerForm.jsx';
import Login from './components/login.jsx';
import { AuthProvider } from '../auth/authorizer.jsx';
import Hello from './components/hello.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import BasicTable from './components/MyTable.jsx';
import EnhancedTable from './components/MyTable2.jsx';
import EnhancedTable2 from './components/MyTable3.jsx';
function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<FormRegistrationApp />} />
            <Route path="/table" element={<BasicTable/>}/> 
            <Route path="/table2" element={<EnhancedTable/>}/>
            <Route path="/table3" element={<EnhancedTable2/>}/>  
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
