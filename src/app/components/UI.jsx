'use client'
import React from "react";

const UI = ({ funcionPrincipal, txt, txtMas, resolver }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Borrador</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded-md mb-4"
        value={txt}
        onChange={txtMas}
        placeholder="Ingresa tu texto aquí..."
      />
      <button
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        onClick={funcionPrincipal}
      >
        Analizar
      </button>
      <>
        <h1>Resultados:</h1>
        <div>
            {resolver}
        </div> 
      </>
    </div>
  );
};

export default UI;