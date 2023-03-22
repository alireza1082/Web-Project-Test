import Login from "./pages/LoginUser";
import { Routes, 
  Route} from "react-router-dom";
import Home from './pages/Home';
import SingUp from './pages/SignUp';
import { initializeParse } from '@parse/react';

initializeParse(
  'http://localhost:1337/parse',
  'WEB_PROJECT_APP',
  'mySecretMasterKey'
);

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signUp' element={<SingUp/>}></Route>
    </Routes>
  );
}

export default Main;
