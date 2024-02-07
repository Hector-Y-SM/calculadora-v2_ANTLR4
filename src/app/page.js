'use client'
import React from 'react'
import { analizar } from './module/generador.js'

const HomePage = () => {
  function iniciar(e)
  {
    e.preventDefault();
    analizar("{1}")
  }
  return (
    <div>
      HomePage
      <form onSubmit={iniciar}> 
      <button>Analizar</button> 
      </form>
      </div>
  )
}

export default HomePage