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

  const validDigits = (text) => {
    return text.replace(/[^0-9.]/g, "");
  }

  const handleHeightChange = (e) => {
    const verifiedValue = validDigits(e.target.value);
    setHeight(verifiedValue);
  }
  const handleWeightChange = (e) => {
    const verifiedValue = validDigits(e.target.value);
    setWeight(verifiedValue);
  }

  console.log(height)

  return (
    <>
      <section className="container">
        <h1>IMC Calculator</h1>
        <form>
          <div className="forms-inputs">
            <div className="form-control">
              <label htmlFor="height">Height:</label>
              <input
                type="number"
                name="height"
                value={height}
                id="height"
                placeholder="Enter your height. Ex: 1.80"
                onChange={(e) => handleHeightChange(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                name="weight"
                value={weight}
                id="weight"
                placeholder="Enter your weight. Ex: 70"
                onChange={(e) => handleWeightChange(e)}
              />
            </div>
          </div>
          <div className="form-controls">
            <MyButton id="calc-btn" content="CALCULATE"/>
            <MyButton id="clear-btn" content="RESET" action={reset}/>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default IMCalc;
