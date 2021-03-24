import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Supplier from "./components/supplier/Supplier";
import Client from "./components/client/Client";

const App = () => {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    setUser(!user);
  };
  return (
    <Router>
      <Navbar user={user} login={handleLogin} />
      <Switch>
        <Route path="/supplier">
          <Supplier />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
