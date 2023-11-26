const arr = [-2, -1, -3, -4, -1, -2, -1, -5, -4];
// const arr = [1]
let maxSum = Number.MIN_SAFE_INTEGER;
// if(arr[0] < 0){
//     maxSum = arr[0]
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log("I:", i)
//     let temp1 = 0;
//     let temp2 = 0;
//     let temp = 0;
//     for (let j = i; j < arr.length; j++) {
//         temp1 += arr[j];
//         if (temp1 > maxSum) {
//             maxSum = temp1;
//             console.log("New max sum 1:", maxSum);
//         }
//     }
    // temp2 = temp1
    // for (let j = arr.length - 1; j >= i + 1; j--) {
    //     // console.log("Value of i 2:", temp2)
    //     temp2 -= arr[j];
    //     if (temp2 > maxSum) {
    //         maxSum = temp2;
    //         console.log("New max sum 2:", maxSum);
    //     }
    // }

// }
// let maxSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++){
//         sum += arr[j];
//         if (sum > maxSum){
//             maxSum = sum;
//         }
//     }

// }


let sum = 0;
for(let num of arr){    //num = -2. -1, -3. 4, -1, 2,1
    sum = Math.max(num , sum + num); // -2, -3. -3,4, 3, 5,6,
    maxSum = Math.max(maxSum, sum); // 0, 0, 0, 4, 4,5,6
    console.log(`${num}\n${sum}\n${maxSum}\n-------------`);
}
console.log("FInal:", maxSum)