//reverse a string 

const reverseStr=(str)=>{
    let reverse=str.split('').reverse().join('')

    return reverse;
}

const reverseStrByWords=(str)=>{
    let reverse=str.split(' ').map((word)=>{
        return word.split('').reverse().join('')
    });
    return reverse
}

console.log(reverseStrByWords("this is gonna be fun "));

console.log(reverseStr("abc"))


//find the longest word in the string

const findLongestWord=(str)=>{
    let longestWord="";
    let len=str.split(" ");

    for(let i=0; i<len.length-1; i++){
        let words=len[i]

        if(words.length >longestWord.length){
            longestWord=words
        }
    }

    return longestWord;
}

// using the sort the method
const longestWordUsingSort=(str)=>{
    let word=str.split(" ");
    word.sort((a,b)=>b.length-a.length)
    return word[0]
}

let st="This is theeeee k"
console.log(longestWordUsingSort(st))


// check if its even or odd
const checkEvenOrOdd=(num)=>{
    return num %2==0 ? "Even" : "Odd"
}

console.log(checkEvenOrOdd(2))