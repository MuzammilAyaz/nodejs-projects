const arr = [12,434,-213,34,34,-423,23];

function mergeSort(arr){
    console.log("11111111")
    if(arr.length < 2){
        return arr
    }
    const mid = arr.length/2;
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}


function merge(leftArr, rightArr){
    if(leftArr > rightArr){ 
        return [...rightArr, ...leftArr]
    }
    return [...leftArr,...rightArr]    
}
console.log(mergeSort(arr))