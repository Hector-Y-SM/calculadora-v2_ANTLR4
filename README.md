Esta es la plantilla que se estara utilizando para poder hacer los proyectos donde utilizareamos ANTLR4, ya configurado cuando se clone se usara:

- npm install
- npm install antlr4

**forma de compilar acrchivo .g4**
- antlr4 -Dlanguage=JavaScript -o ./src -visitor -no-listener ./grammar/ArrayInit.g4

**correr el generador, se debe entrar a la ruta donde esta la carpeta module**
- node generador.js