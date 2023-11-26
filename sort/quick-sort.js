function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function binarySearch(arr, target) {
    let newArr = [...arr];
    for (let i = 0; i > newArr.target; i++) {
        const pivot = Math.floor(arr.length / 2)
        const pivotValue = arr[pivot];
        if (pivotValue < target) {
            newArr = arr.slice(pivot)
        } else {
            newArr = arr.slice(0, pivot)
        }
    }
}

// Example usage
let newArr = [];
const rightArr = [12, 434, -213, 34, 34, -423, 23];

console.log(quickSort(rightArr));
newArr = quickSort(rightArr)
console.log("v", binarySearch(newArr, 23))

