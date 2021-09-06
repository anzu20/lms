import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;