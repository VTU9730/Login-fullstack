import {Route,Routes,Link} from 'react-router-dom'
import Registration from './Registration'
import Login from './Login';
import Home from './Home';
import "./styles.css"
function App() {
  return (
    <div id="nav-bar">
        <Link to="/registration">Register</Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes> 
    </div>
  );
}

export default App;
