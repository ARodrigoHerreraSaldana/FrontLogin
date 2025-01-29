import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import FormRegistrationApp from './components/registerForm.jsx';
import Login from './components/login.jsx';
import { AuthProvider } from '../auth/authorizer.jsx';
import Hello from './components/hello.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import BasicTable from './components/MyTable.jsx';
// import EnhancedTable from './components/MyTable2.jsx';
import EnhancedTable2 from './components/MyTable3.jsx';
import BasicModal from './components/Modal.jsx';
function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/table" element={<BasicTable/>}/> 
            {/* <Route path="/basicModal" element={<BasicModal text="me gusta el cereal"/>}/> */}
            {/* <Route path="/table3" element={<EnhancedTable2/>}/>   */}
            <Route path="/register" element={<FormRegistrationApp />} />
            <Route path="/dashboard" element=
            {<RequireAuth>
             <EnhancedTable2/>
            </RequireAuth>
            }/>
            
          </Routes>
        </div>
      </Router>
    );
  }


export default App
