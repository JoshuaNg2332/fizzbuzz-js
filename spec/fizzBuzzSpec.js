describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe("For multiples of 3, says", function() {
    it('"Fizz" when number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it('"Fizz" when a the number is 6', function(){
      expect(fizzbuzz.says(6)).toEqual("Fizz");
    })
  });

  describe("For multiples of 5, says", function(){
    it('"Buzz" when a number is divisible by 5', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it('"Buzz" when the number is divisible by 10', function(){
      expect(fizzbuzz.says(10)).toEqual("Buzz");
    });
  });

  describe("For multiples of 3 & 5, says", function(){
    it('"Fizzbuzz" when a number is 15', function(){
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });
  });

  describe("For numbers not divisible by 3 or 5", function() {
    it('Returns the number 1', function(){
      expect(fizzbuzz.says(1)).toEqual(1);
    });
  });
});