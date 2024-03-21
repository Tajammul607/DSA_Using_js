// Stack follow first in last out principle

class Stack {
    item: any;

    constructor(){
        this.item=[];
    }

    push(item){
        return this.item.push(item)
    }

    pop(){
        return this.item.pop();
    }

    peek(){
        return this.item.peek(this.item.length -1)
    }

    isEmpty(){
        return this.item.length === 0;
    }
}

