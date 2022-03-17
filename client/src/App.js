import "./App.css";
import Nav from "./comp/Nav";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>E-Dashboard</h1>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
