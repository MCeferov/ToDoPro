//! Components
import Todos from "../Components/Todos";

//! React Router 
import { useHistory } from "react-router-dom"

const Home = (props) => {
 const history = useHistory()

 if (!props.user) {
  history.replace("/sign-in")
}
  return <Todos />;
};

export default Home;
