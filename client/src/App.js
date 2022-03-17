import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./comp/Footer";
import Nav from "./comp/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Products</h1>} />
        <Route path="/add" element={<h1>Add Products</h1>} />
        <Route path="/update" element={<h1>Update Products</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
