class FizzBuzz{

  _isDivisibleBy(number, divisor) {
    return (number % divisor == 0);
  }

  says(number) {
    if (this._isDivisibleBy(number, 15)) {
      return "Fizzbuzz";
    } else if (this._isDivisibleBy(number, 3)) {
      return "Fizz";
    } else if (this._isDivisibleBy(number, 5)) {
      return "Buzz";
    } else {
      return number;
    }  
  }
}