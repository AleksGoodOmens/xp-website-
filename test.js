
// function deepCount(array) {
//     let res = 0;
//     secondFunction(array);
//     function secondFunction(array) {
//         array.forEach(element => {
//             res++;
//             if (typeof (element) == typeof ([])) {
//                 secondFunction(element);
//             }
//         });
//         return res;
//     }

//     return res;
// }


// console.log(deepCount([1, 5, 3]));
// console.log(deepCount(["1", 5, "3", ["10"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([]));
// console.log(deepCount([[[[[[[[[]]]]]]]]]));


const funds = [
    { amount: 1400 },
    { amount: 2400 },
    { amount: 1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: 11400 }
];

const getPositiveIncomeAmount = (data) => {

    return data.map(item => item.amount).filter(item => item > 0).reduce((item, item2) => item + item2);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    return data.map(item => item.amount).some(item => item < 0) ?
        data.map(item => item.amount)
            .reduce((a, b) => a + b)
        : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));