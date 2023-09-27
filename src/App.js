//! Components
import Container from "./Components/Container";
import Header from "./Components/Header";

//! Pages
import Add from "./Pages/Add";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

//! React Router
import { Route, Switch, useHistory } from "react-router-dom";

//! Hooks
import { useState } from "react"

const App = () => {
  const [ user, setUser] = useState(null)  
  const [ todos, setTodos] = useState([])  

  const getUser = (data) => {
    setUser(data)
  }

  const history = useHistory()

  return (
    <Container>
      <Header user={user} />
      <Switch> 
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/sign-in">
          <SignIn getUser={getUser} />
        </Route>
        <Route path="/sign-up">
          <SignUp getUser={getUser} />
        </Route>
        <Route path="/">
        <Home user={user} />
        </Route>
      </Switch>
 
    </Container>
  );
};

export default App;
