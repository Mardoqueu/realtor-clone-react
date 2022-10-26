import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Por from "./pages/Por"
import Home from "./pages/Home"
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
