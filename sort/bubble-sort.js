
const bubbleSort = [90, -10, 23, -4563, 1231, 23, 34]
let numberOfIteration = 0
console.log("Quick sort", bubbleSort);
for (let step = 0; step < bubbleSort.length; step++) {
    for (let i = 0; i < bubbleSort.length - step; i++) {
        if (bubbleSort[i] > bubbleSort[i + 1]) {
            const temp = bubbleSort[i];
            bubbleSort[i] = bubbleSort[i + 1];
            bubbleSort[i + 1] = temp
        }
        numberOfIteration++
    }
}
console.log("Quick sort", bubbleSort, numberOfIteration);


numberOfIteration = 0
const testArrNo = [90, -10, 23, -4563, 1231, 23, 34]
console.log("input:", testArrNo)
//quick sort without multiple iteration
for (let i = 0; i < testArrNo.length; i++) {
    let isSwapped = false;
    if (testArrNo[i] > testArrNo[i + 1]) {
        isSwapped = true
        const temp = testArrNo[i];
        testArrNo[i] = testArrNo[i + 1];
        testArrNo[i + 1] = temp
    }
    numberOfIteration++
    if (isSwapped) {
        i = 0;
        continue
    }
}
console.log("Quick sort without multiple iteration:", testArrNo,numberOfIteration)


numberOfIteration = 0
//reverse order quick sort
const reversebubbleSort = [6,
    121,
    1,
    3,
    10,
    3,
    5]
for (let step = reversebubbleSort.length; step > 0; step--) {
    for (let i = step; i > 0; i--) {
        if (reversebubbleSort[i] < reversebubbleSort[i - 1]) {
            const temp = reversebubbleSort[i];
            reversebubbleSort[i] = reversebubbleSort[i - 1];
            reversebubbleSort[i - 1] = temp
        }
        numberOfIteration++;
    }
}
console.log("reversebubbleSort", reversebubbleSort,
    numberOfIteration)