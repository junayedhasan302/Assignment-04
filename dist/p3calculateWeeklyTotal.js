"use strict";
// Input               Output
// [200, 450, 100]     750
// [1000, 250]         1250
// []                  0
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    const sum = expenses.reduce((sum, currNum) => sum + currNum, 0);
    return sum;
};
// TEST CASE
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
//# sourceMappingURL=p3calculateWeeklyTotal.js.map