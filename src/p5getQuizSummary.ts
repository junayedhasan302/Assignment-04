// Input           Output
// [8, 9, 7, 10]   { total: 34, average: 8.5 }
// [5, 5]          { total: 10, average: 5 }
// []              { total: 0, average: 0 }


interface QuizSummary {
    total: number,
    average: number
}
const getQuizSummary = (scores: number[]): QuizSummary => {
    // For empty array
    if (scores.length === 0) {
        const resultForEmptyArray: QuizSummary = {
            total: 0,
            average: 0
        };
        return resultForEmptyArray;
    }

    const sum: number = scores.reduce((sum: number, currVal: number): number => sum + currVal,0);
    const avg: number = sum / scores.length;

    const result: QuizSummary = {
        total: sum,
        average: avg
    };
    return result;
};

// TEST CASE
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
