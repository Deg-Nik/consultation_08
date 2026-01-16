import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cocktail from "./components/Cocktail";
import Home from "./components/Home/Home";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index  element= {<Home/>}/>
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
