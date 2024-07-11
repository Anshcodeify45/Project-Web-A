import Login from "./Components/Login/signup/Login";
import Signin from "./Components/Login/signup/Signin";
import Dashboard from "./Components/Home/Dashboard";
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Navbar from "./Components/Nav/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/home" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
