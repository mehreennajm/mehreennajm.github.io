var calculator = angular.module('myApp',[]);
calculator.controller('AppCalculator',function CalculatorFunction(){
	this.resultValue = 0;
	this.Buttonclicked = function(button){
		this.selectedOperation = button;

	}

	this.clearInputs = function(){
		this.number1 ='';
		this.number2 = '';
		this.selectedOperation = '';
		this.resultValue = 0;
	}

	this.computeResult = function(){
		var num1 = parseFloat(this.number1);
		var num2 = parseFloat(this.number2);
		

		if(this.selectedOperation === '+'){
			this.resultValue = num1 + num2;
		}

		if(this.selectedOperation === 'sqrt'){
			this.resultValue = Math.sqrt(num1);
		}
		if(this.selectedOperation === 'sin'){
			this.resultValue = Math.sin(num1);
		}
		if(this.selectedOperation === 'cos'){
			this.resultValue = Math.cos(num1);
		}
		if(this.selectedOperation === 'tan'){
			this.resultValue = Math.tan(num1);
		}
		if(this.selectedOperation === 'log'){
			this.resultValue = Math.log(num1);
		}

		if(this.selectedOperation === '^'){
			this.resultValue = num1 ** num2;
		}
		if(this.selectedOperation === '-'){
			this.resultValue = num1 - num2;
		}

		if(this.selectedOperation === '*'){
			this.resultValue = num1 * num2;
		}

		if(this.selectedOperation === '/'){
			this.resultValue = num1 / num2;
		}
	}
});



