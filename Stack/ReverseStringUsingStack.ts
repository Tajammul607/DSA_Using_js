
// so when we're solving reverse operation using stack their are couple of ways to solve it
// the first thing need to get in mind is push and pop 
// when we recive the input need to pust in emty stack
// create a empty variable 
//after that start popping the element from the stack after each pop store that value in  empty variable.


const reverseStringUsingStack=(input: string) : string=>{
    let stack :string[] =[];

    for(const char of input ){
        stack.push(char)
    }

    let reverseString =' '

    while(stack.length >0){
        reverseString +=stack.pop();
    }

    return reverseString;
}

console.log(reverseStringUsingStack('data template'));