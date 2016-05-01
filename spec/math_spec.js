var math = require('../math');

describe("A simple program that does arithmetic", function() {
	
	it("can add two numbers", function() {
		expect(math.add(3,5)).toBe(8);	
	});

	it("can substract two numbers", function() {
		expect(math.substract(3,5)).toBe(-2);
	});

	it("can multiply two numbers", function() {
		expect(math.nultiply(3,5)).toBe(15);
	});

	it("can divide two numbers", function() {
		expect(math.divides(15,5)).toBe(3);
	});
});