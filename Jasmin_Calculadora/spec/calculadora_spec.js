describe("Calculadora",function(){
	var cal = new Calc();
				it("Debería sumar números",function(){					
					expect(cal.suma(5)).toEqual(5);
				})
	})