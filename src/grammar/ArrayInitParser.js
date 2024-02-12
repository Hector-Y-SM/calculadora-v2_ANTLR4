// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,11,39,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,1,1,1,1,1,1,1,1,3,1,17,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,
26,8,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,0,1,4,3,0,
2,4,0,2,1,0,4,5,1,0,6,7,42,0,7,1,0,0,0,2,16,1,0,0,0,4,25,1,0,0,0,6,8,3,2,
1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,17,
3,4,2,0,12,13,5,8,0,0,13,14,5,1,0,0,14,17,3,4,2,0,15,17,5,10,0,0,16,11,1,
0,0,0,16,12,1,0,0,0,16,15,1,0,0,0,17,3,1,0,0,0,18,19,6,2,-1,0,19,26,5,9,
0,0,20,26,5,8,0,0,21,22,5,2,0,0,22,23,3,4,2,0,23,24,5,3,0,0,24,26,1,0,0,
0,25,18,1,0,0,0,25,20,1,0,0,0,25,21,1,0,0,0,26,35,1,0,0,0,27,28,10,5,0,0,
28,29,7,0,0,0,29,34,3,4,2,6,30,31,10,4,0,0,31,32,7,1,0,0,32,34,3,4,2,5,33,
27,1,0,0,0,33,30,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,5,
1,0,0,0,37,35,1,0,0,0,5,9,16,25,33,35];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'='", "'('", "')'", "'*'", "'/'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, "MUL", "DIV", "ADD", 
                             "SUB", "ID", "INT", "NEWLINE", "WS" ];
    static ruleNames = [ "read", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	read() {
	    let localctx = new ReadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_read);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1796) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_stat);
	    try {
	        this.state = 16;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 12;
	            this.match(ArrayInitParser.ID);
	            this.state = 13;
	            this.match(ArrayInitParser.T__0);
	            this.state = 14;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 15;
	            this.match(ArrayInitParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, ArrayInitParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 19;
	            this.match(ArrayInitParser.INT);
	            break;
	        case 8:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            this.match(ArrayInitParser.ID);
	            break;
	        case 2:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(ArrayInitParser.T__1);
	            this.state = 22;
	            this.expr(0);
	            this.state = 23;
	            this.match(ArrayInitParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 33;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_expr);
	                    this.state = 27;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 28;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 29;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ArrayInitParser.RULE_expr);
	                    this.state = 30;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 31;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 32;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.MUL = 4;
ArrayInitParser.DIV = 5;
ArrayInitParser.ADD = 6;
ArrayInitParser.SUB = 7;
ArrayInitParser.ID = 8;
ArrayInitParser.INT = 9;
ArrayInitParser.NEWLINE = 10;
ArrayInitParser.WS = 11;

ArrayInitParser.RULE_read = 0;
ArrayInitParser.RULE_stat = 1;
ArrayInitParser.RULE_expr = 2;

class ReadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_read;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitRead(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(ArrayInitParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.BlankContext = BlankContext;

class PrintExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PrintExprContext = PrintExprContext;

class AssignContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.AssignContext = AssignContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(ArrayInitParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ArrayInitParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(ArrayInitParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ArrayInitParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ArrayInitParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IntContext = IntContext;


ArrayInitParser.ReadContext = ReadContext; 
ArrayInitParser.StatContext = StatContext; 
ArrayInitParser.ExprContext = ExprContext; 
