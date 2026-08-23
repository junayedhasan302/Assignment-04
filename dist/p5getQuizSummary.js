"use strict";
// Input           Output
// [8, 9, 7, 10]   { total: 34, average: 8.5 }
// [5, 5]          { total: 10, average: 5 }
// []              { total: 0, average: 0 }
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    // For empty array
    if (scores.length === 0) {
        const resultForEmptyArray = {
            total: 0,
            average: 0
        };
        return resultForEmptyArray;
    }
    const sum = scores.reduce((sum, currVal) => sum + currVal, 0);
    const avg = sum / scores.length;
    const result = {
        total: sum,
        average: avg
    };
    return result;
};
// TEST CASE
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=p5getQuizSummary.js.map