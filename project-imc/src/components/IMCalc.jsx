import '../assets/IMCalc.css'

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
            <button className="form-control">Calcular</button>
            <button className="form-control">Resetar</button>
          </div>
        
        </form>
      </section>
      
    </>
  )
}

export default IMCalc