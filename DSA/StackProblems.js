function reverseUsingStack(str){
    let Stack=[];

    for(const i of str){  //add the ele in the stack
     Stack.push(i);
    }

    let rev="";
    while(Stack.length > 0){
        rev +=Stack.pop() // here pop the element an add to reverse varable
    }

    return rev
}

let a="Hello woorld";
console.log(reverseUsingStack(a))



function balanceTheParanthesis(str){
    let Stack =[];
    let match ={
        '(':')',
        '{':'}',
        '[':']'
    }

    for(const i of str){
        if(match.hasOwnProperty(i)){
            Stack.push(i)
        }else if(match[Stack.pop()] != i){
            return false // unmatch closed parenthesis
        }
    }

    return Stack.length ===0
}

console.log(balanceTheParanthesis('{}'))