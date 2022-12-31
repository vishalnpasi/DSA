// program to implement stack data strucutre

class Stack{
    constructor(){
        this.items = [];
    }
    add(element){
        return this.items.push(element)
    }
    remove(){
        if(this.items.length>0){
            return this.items.pop()
        }
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length == 0;
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
}
let stack = new Stack()
stack.add(10)
stack.add(20)
stack.add(30)
stack.add(40)
console.log(stack)
console.log(stack.peek())
console.log(stack.remove())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.clear())
console.log(stack.size())




// program to implement queue data strucutre

class Queue{
    constructor(){
        this.items = [];
        this.maxSize = 5
    }
    // add Element in the queue
    enqueue(element){
        return this.items.push(element)
    }
    // remove element from the queue
    dequeue(){
        if(this.items.length>0){
            return this.items.shift()
        }
    }
    //view the last element
    peek(){
        return this.items[0]
    }
    // check if the queue is empty
    isEmpty(){
        return this.items.length == 0;
    }
    isFull(){
        return this.items.length == this.maxSize
    }
    // size of the queue
    size(){
        return this.items.length
    }
    // empty the queue
    clear(){
        this.items = []
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(40)
console.log(queue.isFull())
console.log(queue)
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.size())
queue.clear()
console.log(queue.size())
console.log(queue.items)
