import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./comp/Footer";
import Nav from "./comp/Nav";
import Signup from "./comp/Signup";
import PrivateComp from "./comp/PrivateComp";
import Login from "./comp/Login";
import AddProdcut from "./comp/AddProduct";
import ProductList from "./comp/ProductList";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<PrivateComp />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProdcut />} />
          <Route path="/update" element={<h1>Update Products</h1>} />
          <Route path="/logout" />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
