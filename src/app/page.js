'use client'
import React, { useState } from 'react'
import UI from './components/UI.jsx'
import { analizar } from './module/generador.js'

const HomePage = () => {
  const [txtValor, setTxtValor] = useState('');
  const [resultados, setResultados] = useState([]);

  const leer = () => 
  {
    //console.log(txtValor)
    console.log(resultados)

    const op = txtValor.split('\n');
    //const concatenacion = op.map(exp => `${exp} = ${analizar(exp)}`)
    const concatenacion = op.map(exp => `Resultado = ${analizar(exp)}`)
    console.log(concatenacion)
    setResultados(concatenacion.join('\n'));
  };

  return (
    < UI
      funcionPrincipal={leer}
      txt = {txtValor}
      txtMas = {(e) => setTxtValor(e.target.value)}
      resolver = {resultados}
    />
  )
}

export default HomePage