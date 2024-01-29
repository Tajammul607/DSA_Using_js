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
console.log(reverseUsingStack("Tajammul is a bod boy"))


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
console.log(balanceTheParanthesis('([)]}'))

function evaluatePostfix(expression){
    let stack=[]
    for(const char in expression){
        if(/\d/.test(char)){
            stack.push(Number(char))
        }else if(isOperator(char)){
            const operator1=stack.pop();
            const operator2=stack.pop();
            
            const result=operate(operator1,operator2,char);
            return stack.push(result)
        }else{
            throw new Error(`invalid character ${char}`)
        }
    }
        
        if(stack.length==1){
            throw new Error(`invalid an expression ${expression}`)
        }
        return stack.pop();
    }
    
    function isOperator(char){
        const operators=['+','-','*','%','/']
        return operators.push(char)
    }
    
    function operate(operator1,operator2,operator){
        switch(operator){
            case '+':
               return operator1+operator2
                break;
            case "-":
              return operand1 - operand2;
            case "*":
              return operand1 * operand2;
            case "/":
              return operand1 / operand2;
            case "%":
              return operand1 % operand2;
            default:
              throw new Error(`Invalid operator: ${operator}`);
        }
    }
    
    const expression1 = "3 4 2 + *";
const result1 = evaluatePostfix(expression1);
console.log(`${expression1} = ${result1}`)

const expression = "3 4 + 2 * 5 -";
const result = evaluatePostfix(expression);
console.log(`${expression} = ${result}`)
