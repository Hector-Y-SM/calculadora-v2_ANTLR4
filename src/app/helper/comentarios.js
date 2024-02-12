/**
 * Funcion para eliminar contenido de comentarios de linea y de bloque
 * @param {*} input 
 * @returns textos fuera de comentarios
 */

export function comentario(input) {
    const inspector = input.split('');
    const muestras = [];
    let estado = 0;
  
    for (let i = 0; i < inspector.length; i++) {
        if (estado === 0) {
            if (inspector[i] === '/') {
                estado = 1;
            } else if (inspector[i] === '*') {
                if (inspector[i + 1] === '/') {
                    return 'Error en sintaxis de comentarios';
                } else {
                    muestras.push(inspector[i]);
                    estado = 0;
                }
            } else {
                muestras.push(inspector[i]);
            }
        } else if (estado === 1) {
            if (inspector[i] === '*') {
                estado = 2;
            } else if (inspector[i] === '/') {
                estado = 4;
            } else {
                muestras.push(inspector[i - 1]);
                muestras.push(inspector[i]);
                estado = 0;
            }
        } else if (estado === 2) {
            if (inspector[i] === '*') {
                estado = 3;
            }
        } else if (estado === 3) {
            if (inspector[i] === '/') {
                estado = 0;
            } else {
                estado = 2;
            }
        } else if (estado === 4) {
            if (inspector[i] === '\n') {
                muestras.push('\n'); //eviataremos que se modifique el formato del archivo original y no se convierta en una sola linea ded txt
                estado = 0;
            } else {
                estado = 4;
            }
        }
    }
  
    if (estado === 1 || estado === 2 || estado === 3) {
        return 'Error en sintaxis de comentarios';
    } else {
      console.log(muestras.join(''))
        return muestras.join('');
    }
  }
  
