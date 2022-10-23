import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path={"/login"}>
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;