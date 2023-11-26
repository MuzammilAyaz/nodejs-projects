class queue {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size);
    }
    isEmpty(){
         return this.arr.length !== this.size
    }
    show() {
         return this.arr;
    }
    enqueue(data){
        this.arr.push(data)
        return
    }
    dequeue(data){
        this.arr.pop(data);
        return
    }
};

const queue1 = new queue(4);

console.log(queue1.isEmpty());

console.log(queue1.enqueue(3));

console.log(queue1.enqueue(5));

console.log(queue1.show());
const a = new Array(100).fill("100")
a.length = 500;
console.log(a[400])
console.log()