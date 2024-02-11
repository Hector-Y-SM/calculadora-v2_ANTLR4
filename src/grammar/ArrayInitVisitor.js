// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
//este archivo solo sirve para sacar los metodos.
import antlr4 from 'antlr4';
import { memory } from '@/app/helper/assignaciones';

// This class defines a complete generic visitor for a parse tree produced by ArrayInitParser.

export default class ArrayInitVisitor extends antlr4.tree.ParseTreeVisitor {
		// Visit a parse tree produced by ArrayInitParser#read.
		visitRead(ctx) {
			const resultado = this.visit(ctx.stat()); //el argumento de la visita sera el contexto seguido de la segunda regla de inicio
			console.log('todos quieren venir aqui: '+resultado);
		  return resultado;
		  }
	
	
	  // Visit a parse tree produced by ArrayInitParser#printExpr.
		visitPrintExpr(ctx) {
			console.log('visitPrintExpr')
			const nn = this.visit(ctx.expr());
			console.log('DENTRO DEL PRINT '+nn)
		  return nn;
		}
	
	
		// Visit a parse tree produced by ArrayInitParser#assign.
		visitAssign(ctx) {
			console.log('visitAssign')
			const id = ctx.ID().getText();
			const valor = this.visit(ctx.expr());
			memory.push({id: id, valor: valor})
			console.log(memory)
		  return valor;
		}
	
	
		// Visit a parse tree produced by ArrayInitParser#blank.
		visitBlank(ctx) {
			console.log('visitBlank')
		  return this.visit(ctx.expr());
		}
	
		// Visit a parse tree produced by ArrayInitParser#MulDiv.
		visitMulDiv(ctx) {
		  console.log('visitMulDiv');
		  const n1 = this.visit(ctx.expr(0));
			if(memory.length <= 0){
					console.log('MULTI O DIV VOL 1')
					const n2 = this.visit(ctx.expr(1));
				return ctx.op.type == 4? n1 + n2 : n1 - n2;
			}
	
			if(memory.length >= 1) {
					console.log('MULTIPLICACION O DIVISION VOL 2')
					const n2 = this.visit(ctx.expr(1));
				return ctx.op.type == 4? n1 * n2 : n1 / n2;
			}
		}
	
	
		// Visit a parse tree produced by ArrayInitParser#AddSub.
		visitAddSub(ctx) {
		  console.log('visitAddSub');
		  const n1 = this.visit(ctx.expr(0));
			if(memory.length <= 0 ){
					console.log('SUMA O RESTA VOL 1')
					const n2 = this.visit(ctx.expr(1));
				return ctx.op.type == 6 ?  n1 + n2 : n1 - n2;
			}
	
			if(memory.length >= 1){
					console.log('SUMA O RESTA VOL 2')
				//const i1 = this.visit(ctx.expr(0));
				//const contiene = memory.find(obj => obj.id === i1);
				//const n1 = contiene.valor;
					const n2 = this.visit(ctx.expr(1));
				//const cont = [n1, n2]
				//console.log('NUM UNO: '+n1)
					console.log('NUM DOS: '+n2)
				//console.log('arreglo de valores: '+cont)
				return ctx.op.type == 6 ?  n1 + n2 : n1 - n2;
			}
		}
	
	
		// Visit a parse tree produced by ArrayInitParser#id.
		visitId(ctx) {
			const id = ctx.ID().getText();
			console.log('ESTA ES LA ID '+id)
			const contiene = memory.some(obj => obj.id === id);
			const valor = memory.find(obj => obj.id === id);
			console.log('ESTE ES EL VALOR DE LA ID: '+valor.valor)
	
		  return contiene? valor.valor : 0; //!aqui iba la id
		}
	
	
		// Visit a parse tree produced by ArrayInitParser#int.
		visitInt(ctx) {
			console.log('visitInt');
			//numbers.push({noID: null, puroValor: Number(ctx.getText())})
			//console.log(numbers)
			//console.log(ctx.getText());
		  return Number(ctx.getText());
		}
	
		  // Visit a parse tree produced by ArrayInitParser#parens.
		visitParens(ctx) {
			console.log('visitParens')
		  return this.visit(ctx.expr());
		}
}