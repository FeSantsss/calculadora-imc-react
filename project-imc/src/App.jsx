import IMCalc from './components/IMCalc'
import ImcTable from './components/ImcTable';


import { data } from "./data/data.js"
import { useState } from 'react'

import './App.css'

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    
    if (!height && !weight) return;
    
    const resultImc = (weight / (height * height)).toFixed(1);

    setImc(resultImc);
  }

  return (
    <>
      {!imc ? (
        <IMCalc calcImc={calcImc}/>
      ) : (
        <ImcTable />
      )};

    </>
  )
}

export default App
