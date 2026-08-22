// Input               Output
// [200, 450, 100]     750
// [1000, 250]         1250
// []                  0

const calculateWeeklyTotal = (expenses: number[]): number => {
  const sum:number = expenses.reduce((sum:number, currNum:number):number => sum + currNum, 0);
  return sum;
};


// TEST CASE
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
