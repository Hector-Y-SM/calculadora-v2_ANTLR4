grammar ArrayInit;
import CommonLexerRules;

read: stat+; //regla de inicio

//stat sera la segunda regla de inicio
stat: expr                      # printExpr
    | ID '=' expr               # assign
    | NEWLINE                   # blank
    ;

expr: expr op=('*'|'/') expr    # MulDiv
    | expr op=('+'|'-') expr    # AddSub
    | INT                       # int
    | ID                        # id
    | '(' expr ')'              # parens
    ;