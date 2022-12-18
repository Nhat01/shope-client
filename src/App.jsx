import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './page/Cart';

import Home from "./page/Home";
import Login from "./page/Login";
import Product from "./page/Product";
import Register from "./page/Register";
import {useSelector} from "react-redux"

function App() {
  let user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={user ? <Cart /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
