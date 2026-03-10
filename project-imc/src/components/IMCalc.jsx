import { useState, useEffect } from "react";
import "../assets/IMCalc.css";
import MyButton from "./Button.jsx";
import Footer from "./Footer.jsx";

const IMCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const reset = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  }

  console.log(height)

  return (
    <>
      <section className="container">
        <h1>IMC Calculator</h1>
        <form>
          <div className="forms-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="number"
                name="height"
                value={height}
                id="height"
                placeholder="Digite sua altura"
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Peso:</label>
              <input
                type="number"
                name="weight"
                value={weight}
                id="weight"
                placeholder="Digite seu peso"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="form-controls">
            <MyButton id="calc-btn" content="CALCULAR"/>
            <MyButton id="clear-btn" content="RESETAR" action={reset}/>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default IMCalc;
