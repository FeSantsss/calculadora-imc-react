import IMCalc from './components/IMCalc'
import ImcTable from './components/ImcTable';


import { data } from "./data/data.js"
import { useState } from 'react'

import './App.css'

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const reset = (e) => {
    e.preventDefault();

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    
    if (!height || !weight) return;
    
    const resultImc = (weight / (height * height)).toFixed(1);

    setImc(resultImc);

    data.forEach((item) => {
      if(resultImc >= item.min && resultImc <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return;
  }

  return (
    <>
      {!imc ? (
        <IMCalc calcImc={calcImc}/>
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} reset={reset}/>
      )};

    </>
  )
}

export default App
