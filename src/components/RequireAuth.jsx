
import { Navigate,useLocation } from "react-router-dom"
import useAuth from "../../auth/authorizer.jsx"

function RequireAuth({ children }) {
  const { authorized } = useAuth();
  const location = useLocation();
  console.log('authed', authorized)
  return authorized=== true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth