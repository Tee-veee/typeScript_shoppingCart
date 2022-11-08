import { Routes, Route } from "react-router-dom";
import React, { FC } from "react";
// PAGES
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
// COMPONENTS
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
// CONTEXT
import ShoppingCartProvider from "./context/ShoppingCartContext";

const App: FC = () => {
  return (
    <main className="h-fit max-w-[100vw] relative ">
      <ShoppingCartProvider>
        <ShoppingCart />
        <Navbar />
        <div className="container mx-auto h-fit pb-12 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </main>
  );
};

export default App;
