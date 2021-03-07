import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function App(props) {

  return (
    <Router>
      <div className="App">
        <Header />
        <Body  DialogUsers={props.DialogUsers} messages={props.messages}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
