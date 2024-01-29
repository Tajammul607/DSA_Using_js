function  getOccurance(str){
    let countTheOccurance={};
    str.split('').forEach(word=>{
        if(countTheOccurance.hasOwnProperty(word)===false){
            countTheOccurance[word]=1
        }else{
            countTheOccurance[word]++
        }
    })
    return countTheOccurance;
}

console.log(getOccurance("tajammul"))

let ar=[1,2,"wye",3,4,5,6,7,"hsgdg"]

function sumOfAll(ar){
    let sum=0
    // for(let i=0; i<ar.length; i++){
    //     if(typeof ar ==='number'){
    //        sum +=ar[i]
    //     }
    // }
    // return sum
    ar.forEach(ele=>{
        if(typeof ele === 'number'){
            sum =sum +ele
        }
       
    })
    return sum
}

console.log(sumOfAll(ar))


function filterTheObj(arr){
   return  arr.filter(word=>{
      return word.gender ==='Female'
    })
   
}
const arr=[
    {name:"Tajammul" , gender:"Male"},
    {name:"Prajaktha" ,gender:"Female"},
    {name:"fatime", gender:"Female"},
    {name:"deepak", gender :"Male"},
    {name:"Vaibhava", gender:"Female"}

]


console.log(filterTheObj(arr))




let count=0;
arr.forEach(word=>{
    if(word.gender !=='Male') count++
})

for(let i =0;i<count; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j].gender !== 'Male'){
            arr.splice(j , 1)
        }
    }
}

console.log(arr)

function returnTheType(ele){
    return typeof ele
}

console.log(returnTheType(true));
console.log(returnTheType(()=>{}))
console.log(returnTheType(undefined))

   function reterivalEle(arr,n){
    let dummy=[]
    arr.map(ele=>{
        if(ele <=n){
            dummy.push(ele)
        }
    })

    return dummy
   }

   console.log(reterivalEle([1,2,3,4],3))

   function getTheLastEle(arr ,n=1){
    let dummy=[];

    for(let i =n; i>=0; i-- ){
        dummy +=arr.pop()
    }
    return dummy
   }

   console.log(getTheLastEle([1,2,3,4],1))

   function mostFrequentOccur(num){
      let freq={};

      num.forEach(word=>{
        if(freq.hasOwnProperty(word)) freq[word]++
        else freq[word]=1
      })
      return freq
   }

   console.log(mostFrequentOccur([1,2,1,1,1]))