import { useState, useEffect } from 'react'
import '../assets/IMCalc.css'
import MyButton from './Button.jsx'
import Footer from './Footer.jsx'

const IMCalc = () => {
  return (
    <>
      <section className="container">
        <h1>IMC Calc</h1>
        <form>
          <div className="forms-inputs">
            <div className="form-control">
              <label htmlFor="heigth">Altura:</label>
              <input type="number" name="heigth" id="heigth" placeholder='Digite sua altura'/>
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input type="number" name="weight" id="weight" placeholder='Digite seu peso'/>
            </div>
          </div>
          <div className="form-controls">
            <MyButton id="calc-btn" content="Calcular"/>
            <MyButton id="clear-btn" content="Resetar"/>
          </div>
        
        </form>
      </section>

      <Footer/>
      
    </>
  )
}

export default IMCalc