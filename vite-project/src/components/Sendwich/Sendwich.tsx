import { useState, type JSX } from "react";
import style from "./Sendwich.module.css"
import { useTheme } from "../themeContext/useTheme";


export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Бутербродный конфигуратор: ");
  const {theme, toggleTheme} = useTheme();

  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese🧀`);
  }
  function handleAddSalami(): void {
    setSandwich(`${sandwich} Salami🍗`);
  }
  function handleAddSalat(): void {
    setSandwich(`${sandwich} Salat🥦`);
  }
  function handleClear(): void {
    setSandwich("Бутербродный конфигуратор: ");
  }

  return (
    <div className={`${style.container} ${theme === "dark"? style.dark : style.light}`}>
      <h2>Sandwich</h2>
      <img
        className={style.image}
        src="https://img.freepik.com/free-psd/close-up-appetizing-sandwich_23-2151837121.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddBread}>
          Add Bread
        </button>
        <button type="button" className={style.btn} onClick={handleAddCheese}>
          Add Cheese
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalami}>
          Add Salami
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalat}>
          Add Salat
        </button>
        <button type="button" className={style.btn} onClick={handleClear}>
          ВСЕ СЪЕСТЬ
        </button>
      </div>
      
      <button type="button" className={style.themeToggle} onClick={toggleTheme}>
        Цвет темы({theme})
      </button>
  
    </div>
  );
}
