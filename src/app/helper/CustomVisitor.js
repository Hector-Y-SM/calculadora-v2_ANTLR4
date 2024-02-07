// aqui se coloca
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";

export default class CustomVisitor extends ArrayInitVisitor{
    	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
        console.log('visitando gramatica init');
        return this.visitChildren(ctx);
      }
  
  
      // Visit a parse tree produced by ArrayInitParser#value.
      visitValue(ctx) {
        console.log('visitando gramatica value');
        return this.visitChildren(ctx);
      }
  
  
}