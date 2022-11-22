import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddEdit />}></Route>
          <Route path="/update/:id"  element={<AddEdit />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search " element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
