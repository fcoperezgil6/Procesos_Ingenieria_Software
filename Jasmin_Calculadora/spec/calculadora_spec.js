describe("Calculadora",function(){
	var cal = new Calc();
	beforeEach(function() {
		cal.actual=0;
	});
	/*
	it("debería almacenar el valor actual en todo momento",function(){
				expect(cal.actual).toBeDefined(); //debe existir la variable
				expect(cal.actual).toEqual(0);	 //debe tener valor inicial 0
			});

	it("Debería sumar números",function(){
		expect(cal.suma(5)).toEqual(5);
		expect(cal.suma(5)).toEqual(10);
	});

	it("Sumar cualquier número", function(){
		expect(cal.suma(1,2,3)).toEqual(6);
		expect(cal.suma(1,2,3,4)).toEqual(16);
	});
*/

	describe("Al sumar números",function(){
		it("debería almacenar el valor actual en todo momento",function(){
			expect(cal.actual).toBeDefined(); //debe existir la variable
			expect(cal.actual).toEqual(0);	 //debe tener valor inicial 0
		});

		it("Debería sumar números",function(){	
			expect(cal.suma(5)).toEqual(5);
			expect(cal.suma(5)).toEqual(10);
		});

		it("sumar cualquier conjunto de números",function(){
			expect(cal.suma(1,2,3)).toEqual(6);
		});

	});

	describe("Al restar números", function(){
		it("Debería restar cualquier conjunto de números", function(){
			expect(cal.resta(5)).toEqual(-5);
		});
	});

	it("debería resetear el valor de la calculadora",function(){
		cal.actual=20;
			cal.reset();
			expect(cal.actual).toEqual(0);
	});
})