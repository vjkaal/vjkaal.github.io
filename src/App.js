import "./App.css";

import { Header } from "./comps/Header";
import { Index } from "./IndexComps/Index";
import { About } from "./AboutComps/About";
import { MyWorks } from "./MyWorksComps/MyWorks";
import {Toggle} from './comps/Toggle';

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [style, setStyle] = useState("light");

  const toggleTheme = () => {
    setStyle(style === "light" ? "dark" : "light");
    console.log(style);
  };

  return (
    <div className={["App", style].join(' ')}>
      <Router>
        <Header></Header>

        <Routes>
          <Route exact path="/" element={ <Index /> } />
          <Route exact path="/MyWorks" element={ <MyWorks /> } />
          <Route exact path="/about" element={ <About />} />
        </Routes>
      </Router>

      <Toggle theme={style} toggleTheme={toggleTheme}></Toggle>
    </div>
  );
}

export default App;
