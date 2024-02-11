//Este archivo se estara utilzando para definir el lexico de las gramaticas
lexer grammar CommonLexerRules;

MUL : '*' ; // assigns token name to '*' used above in grammar
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;
ID : [a-zA-Z]+;
INT : [0-9]+ ;
NEWLINE:'\r'? '\n'; // return newlines to parser (end-statement signal)
WS : [ \t]+ -> skip ; // toss out whitespace