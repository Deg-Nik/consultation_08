import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cocktail from "./components/Coctail/Cocktail";
import Home from "./components/Home/Home";
import Sandwich from "./components/Sendwich/Sendwich";
import { ThemeProvider } from "./components/themeContext/ThemeProvider";

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sandwich" element={<Sandwich />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
