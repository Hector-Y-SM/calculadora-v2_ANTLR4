//! archivo bueno, copia con anotaciones, clg y pruebas en src/grammar/ArrayInitVisitor  

import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";
import { memory } from "./assignaciones.js";

export default class CustomVisitor extends ArrayInitVisitor{
	// Visit a parse tree produced by ArrayInitParser#read.
    visitRead(ctx) {
		const resultado = this.visit(ctx.stat());
	  return resultado;
  	}


  // Visit a parse tree produced by ArrayInitParser#printExpr.
	visitPrintExpr(ctx) {
		const resultado = this.visit(ctx.expr());
		if (typeof resultado === 'number' && !memory.some(obj => obj.valor === resultado)) { console.log(resultado); }
	  return resultado;
	}


	// Visit a parse tree produced by ArrayInitParser#assign.
	visitAssign(ctx) {
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
	  const n1 = this.visit(ctx.expr(0));
		if(memory.length <= 0){
				const n2 = this.visit(ctx.expr(1));
			return ctx.op.type == 4? n1 * n2 : n1 / n2;
		}

		if(memory.length >= 1) {
				const n2 = this.visit(ctx.expr(1));
			return ctx.op.type == 4? n1 * n2 : n1 / n2;
		}
	}


	// Visit a parse tree produced by ArrayInitParser#AddSub.
	visitAddSub(ctx) {
	  const n1 = this.visit(ctx.expr(0));
		if(memory.length <= 0 ){
				const n2 = this.visit(ctx.expr(1));
			return ctx.op.type == 6 ?  n1 + n2 : n1 - n2;
		}

		if(memory.length >= 1){
				const n2 = this.visit(ctx.expr(1));
			return ctx.op.type == 6 ?  n1 + n2 : n1 - n2;
		}
	}


	// Visit a parse tree produced by ArrayInitParser#id.
	visitId(ctx) {
		const id = ctx.ID().getText();
		const contiene = memory.some(obj => obj.id === id);
		let valor = 0;

		for (let i = memory.length - 1; i >= 0; i--) {
			if (memory[i].id === id) {
				valor = memory[i].valor;
				break;
			}
		}
		return contiene ? valor : 0;
	}


	// Visit a parse tree produced by ArrayInitParser#int.
	visitInt(ctx) {
	  return Number(ctx.getText());
	}

  	// Visit a parse tree produced by ArrayInitParser#parens.
	visitParens(ctx) {
	  return this.visit(ctx.expr());
	}
}