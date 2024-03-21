// Queue is the linear data structure but follow the first in first out principle
// Also the  Element is added at rear(called as Enqueue) and remove from the front(called dequeue)


class Queue<T>{
    private item :T[];

    constructor(){
        this.item=[]
    }

    Enqueue(item){
        return this.item.push(item)
    }

    Dequeue(){
        return this.item.pop();
    }

    peek(){
        return this.item[0];
    }

    isEmpty(){
        return this.item.length ==0;
    }
}


let queue=new Queue<number>();

queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
console.log(queue.Dequeue())
console.log(queue.peek());
console.log(queue.isEmpty());
