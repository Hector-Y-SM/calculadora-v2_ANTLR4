'use client'
import React, { useState } from 'react'
import UI from './components/UI.jsx'
import { analizar } from './module/generador.js'
import { comentario } from './helper/comentarios.js'

const HomePage = () => {
  const [txtValor, setTxtValor] = useState('');
  const [resultados, setResultados] = useState([]);

  const leer = () => {
    const pre = comentario(txtValor);
    if(pre == "Error en sintaxis de comentarios" ){ return setResultados('Error en sintaxis de comentarios') }

    const op = pre.split('\n');
    const concatenacion = op
      .filter(exp => exp.trim() !== '') //borrar las lines en blanco
      .map(exp => {
        const igualIndex = exp.indexOf('=');
        if (igualIndex !== -1) {
            const variable = exp.substring(0, igualIndex).trim();
            return `${variable} = ${analizar(exp)}`;
        } else {
            return `Resultado = ${analizar(exp)}`;
        }
    });
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