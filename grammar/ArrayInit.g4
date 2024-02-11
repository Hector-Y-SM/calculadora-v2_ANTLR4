grammar ArrayInit;
import CommonLexerRules;

read: stat+; //regla de inicio

//stat sera la segunda regla de inicio
stat: expr NEWLINE              # printExpr
    | ID '=' expr NEWLINE       # assign
    | NEWLINE                   # blank
    ;

expr: expr op=('*'|'/') expr    # MulDiv
    | expr op=('+'|'-') expr    # AddSub
    | INT                       # int
    | ID                        # id
    | '(' expr ')'              # parens
    ;