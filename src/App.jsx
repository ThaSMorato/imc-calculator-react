import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Result from "./component/result";

const App = () => {
  const [kilos, setKilos] = useState(0);
  const [metros, setMetros] = useState(0);
  const [type, setType] = useState({ type: "", obesity: 0, value: 0, isCalculated: false });

  const imcTypes = [
    {
      min: 0,
      max: 18.59999999999999,
      type: "MAGREZA",
      obesity: 0,
    },
    {
      min: 18.6,
      max: 24.999999999999999,
      type: "NORMAL",
      obesity: 0,
    },
    {
      min: 25,
      max: 29.999999999999999,
      type: "SOBREPESO",
      obesity: 1,
    },
    {
      min: 30,
      max: 39.999999999999999,
      type: "OBESIDADE",
      obesity: 2,
    },
    {
      min: 40,
      max: 9999999,
      type: "OBESIDADE GRAVE",
      obesity: 3,
    },
  ];

  const checkNull = () => {
    return kilos > 0 && kilos !== undefined && metros > 0 && metros !== undefined;
  };

  const calculateIMC = () => {
    console.log(kilos, metros);
    const imcValue = kilos / (metros * metros);
    console.log(imcValue);
    const result = imcTypes.find((imcType) => {
      return imcValue >= imcType.min && imcValue <= imcType.max;
    });
    setType({ isCalculated: true, type: result.type, obesity: result.obesity, value: imcValue });
  };

  const changeHandler = (e, type) => {
    const value = e.target.value;
    if (type === "kilo") {
      setKilos(value);
    } else {
      setMetros(value);
    }
    if (checkNull()) {
      calculateIMC();
    }
  };

  return (
    <main id='app--imc'>
      <div className='container'>
        <figure>
          <img src={logo} className='App-logo' alt='react logo' />
        </figure>
        <h1>IMC</h1>
        <h2>React</h2>
        <div className='wrapper'>
          <div className='input__group'>
            <input
              type='number'
              min='0'
              step='1'
              value={kilos}
              onChange={(e) => changeHandler(e, "kilo")}
            />
            <label>Kilos</label>
          </div>
          <div className='input__group'>
            <input
              type='number'
              min='0'
              step='0.01'
              value={metros}
              onChange={(e) => changeHandler(e, "metros")}
            />
            <label>Metros</label>
          </div>
          <div className='result'>
            {type.isCalculated ? (
              <Result result={type} />
            ) : (
              <p className='waiting'>Aguardando preenchimento de dados</p>
            )}
          </div>
        </div>
      </div>
      <span className="author">
        Thales Silva Morato
      </span>
    </main>
  );
};

export default App;
