import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>

          </Routes>
        </Router>
    </>
  );
}

export default App;
