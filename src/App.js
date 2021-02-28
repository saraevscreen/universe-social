import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Body />
      </div>
    </Router>
  );
}

export default App;
