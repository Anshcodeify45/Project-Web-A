import Login from "./Components/Login/signup/Login";
import Signin from "./Components/Login/signup/Signin";
import Dashboard from "./Components/Home/Dashboard";
import {BrowserRouter , Routes ,Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/home" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
