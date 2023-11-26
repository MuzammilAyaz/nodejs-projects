function fibonacci(n){
    const arr = [0,1];
    //base condition
    if(n < 2){
        return arr
    }
    for(let i=2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}

function fibonacciRecursive(n){
    const arr = [0,1]
    if(n == 2){
        return 1
    }
    if(n==1){
        return 0
    }
    return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2))
}

console.log(fibonacci(7))
console.log(fibonacciRecursive(7))