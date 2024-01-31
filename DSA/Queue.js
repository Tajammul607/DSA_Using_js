// queue 

class Queue {
    constructor(){
        this.items=[];
        this.front=0;
        this.rear=0;
    }

    enqueue(item){
       this.items[this.rear]= item;
       this.rear=(this.rear + 1) % this.items.length; // handle circular queue behavior
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const item=this.items[this.front];
        this.front=(this.front+1) % this.items.length;
        return item
    }

    peek(){
        return this.items[this.front]
    }

    isEmpty(){
        return this.front === this.rear
    }

    size(){
        return (this.rear -this.front + this.items.length) % this.items.length; // ensuring thr array length within the bound
    } 
}