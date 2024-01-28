const reverseNumber=(num)=>{
    rev=0
    while(num > 0){
      let rem=num%10;
      rev =rev*10 + rem;
      num=Math.floor(num/10)
    }

    return rev 
}

console.log(reverseNumber(1234))

function checkPalindrome(str){
    let str1=str.split('').reverse().join('')
    return str1 == str
}

console.log(checkPalindrome("lool"))

//when we're dealing with number sort() will take 2 argu to make it to asc or dsc
function  alphaOrder(str){
    return str.split('').sort().join();
}

console.log(alphaOrder("little"))

const captilizeFirstLetter= (str) =>{
    let convertFirstLetterAsCap= str.split(' ').map( word =>{
        return word.charAt(0).toUpperCase()+ word.substring(1)
    })
    // return convertFirstLetterAsCap.join(' ')
    return convertFirstLetterAsCap // this's give me an array
}

console.log(captilizeFirstLetter("this is gonna be amazing"))



function get(params) {
    let count={}

    params.split("").forEach(ele=>{
        if(count.hasOwnProperty(ele)==false){
             count[ele]=1
        }else{
            count[ele]++
        }
    })
    return count;
}
console.log(get("hhaa"))

