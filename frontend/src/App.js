import Login from "./Components/Login/signup/Login";
import Signin from "./Components/Login/signup/Signin";
import Dashboard from "./Components/Home/Dashboard";
import Audit from "./Components/Home/Audit";
import Navbar from "./Components/Nav/Navbar";

import {BrowserRouter , Routes ,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/home" element={<Dashboard/>}></Route>
        <Route path="/audit" element={<Audit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
