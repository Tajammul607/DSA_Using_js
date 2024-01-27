class Stack{
    constructor(){
        this.item=[];
    }

    push(item){
        return this.item.push(item)
    }
    pop(){
        return this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length===0
    }
    size(){
        return this.item.length;
    }
}

function balanceTheParanthesis(pairs){
    let createEmptyStack=[];
    let createPairOfparenthesis={
        '(':')',
        '[':']',
        '{' :'}'
 }

 for(const i of pairs){
    if(createPairOfparenthesis.hasOwnProperty(i)){
        createEmptyStack.push(i)
    }else if(createPairOfparenthesis[createEmptyStack.pop()] != i){
       return false
    }
 }

 return  createEmptyStack.length ===0
}

const pairs ="{}"

console.log(`${pairs} is balanced: ${balanceTheParanthesis(pairs)}`)