import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Home from "./pages/Home"
import Home from "./pages/Home"

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
