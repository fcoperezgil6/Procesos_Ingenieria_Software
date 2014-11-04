var Calc=function(){
	this.actual = 0;
	
	this.suma=function(num){
		this.actual += num;
		return this.actual;
	};

	this.suma=function(){
		var sum = this.actual;
		for(var i=0; i<arguments.length;i++){
			sum += arguments[i];
		}
		this.actual = sum;
		return this.actual;
	};

	this.resta=function(num){
		this.actual -= num;
		return this.actual;
	};

	this.resta=function(){
		var res = this.actual;
		for(var i=0; i<arguments.length;i++){
			res -= arguments[i];
		}
		this.actual = res;
		return this.actual;
	};

	this.reset=function(){
		this.actual=0;
	}
};