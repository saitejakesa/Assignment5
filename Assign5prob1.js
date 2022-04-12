//Print odd numbers in an array
let oddnum=[]
oddnum=(function(...num){
    for(let i=0;i<num.length;i++){
        if(num[i]%2!==0){
            oddnum.push(num[i]);
        }
    }
    return oddnum;
    
})(4,7,5,6,3,2,1)
console.log(oddnum)
//O/P:[7, 5, 3, 1]

//Convert all the strings to title caps in a string array

let titlecaps=[]
titlecaps=(function(...num){
    for(i=0;i<num.length;i++){
        titlecaps.push(num[i].toUpperCase())
    }
    return titlecaps
})("india","chaina","united states of america","russia","pakistan","european union")

console.log(titlecaps)

//O/P:['INDIA', 'CHAINA', 'UNITED STATES OF AMERICA', 'RUSSIA', 'PAKISTAN', 'EUROPEAN UNION']
//Sum of all numbers in an array

let total=0
let sum=(function(...num){
    for(let i=0;i<num.length;i++){
        total=total+num[i]
    }
    return total
})(7,5,6,4,2,1,56,84)
console.log(sum)

//O/P:165

//Return all the prime numbers in an array
let prime=[]
prime=(function(...num){
    for(let i=2;i<num[i];i++){
        if(num[i]%i==0){
            continue
        }
        prime.push(num[i])
    }
    return prime
})(74,86,57,423,569,879,577)
console.log(prime)
//O/P:[57, 569, 879, 577]

//Return all the palindromes in an array
let palindromes=[]
let rev=""
palindromes=(function(...num){
    for(let i=0;i<num.length;i++){
      let m=num[i].toString()
      let k=m.length
      if(k%2==0){
        for(let j=0;j<k/2;j++){
            if(m[j]==m[k-1-i]){
            palindromes.push(num[i])
        }
        else{
            continue
        }
        }
        
      }
      else{
        continue
      }
    }
    return palindromes
})(474,4559,5445,5223,27652,286682)
console.log(palindromes)

//O/P:[ 4559, 5445, 5223, 286682 ]

//Return median of two sorted arrays of the same size

let median=(function(a,b){
    let c=[...a,...b].sort((a,b)=>a-b)
    let half=c.length/2
    if(c.length%2)
        return c[half]
    return [c[half]+c[half-1]]/2

})([6,2,7,4,6,5],[8,4,6,7,6,15])
console.log(median)

//Output:6

let free=(function(...a) {
   for(let i=0;i<a.length;i++){
       for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
              a.splice(j,1)
              if(a[i]!=a[j]){
                continue
              }
              else{
                a.splice(j,1)
              }
                
            }
            else{
                continue
            }
       }
   }
   return a
})(7,5,6,2,2,5,6,7,2,3)
console.log(free)
//O/p  [7, 5, 6, 2, 3]

//Link Problems Start
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(num) { 
return num+5
}
var result = addFive(num)
console.log(result)
//O/P: 15

//Write a function called “getOpposite”.
//Given a number, return its opposite

var num = -10;
function getOpposite(num) {
    return -num
}
var result2 = getOpposite(num)
console.log(result2)

//O/P:10

//Fill in your code that takes an number minutes and converts it to seconds
var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs)
//O/P:300

//Create a function that takes a string and returns it as an integer
var mystr = "1000";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint)
//O/P:1000

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = -10;
function nextNumber(myint) {
    return myint + 1
}
var myNextint = nextNumber(myint)
console.log(myNextint)
//O/P:-9

//Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr)
console.log(data)
//O/P:1

//Convert Hours into Seconds

var arr = [1, 2, 3];
var newarr=[];
function hourToSeconds(arr) {
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]*60*60);
    } 
    return newarr 
}
var data = hourToSeconds(arr)
console.log(data)

//O/P:[3600, 7200, 10800]

//Find the Perimeter of a Rectangle

function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri)
//O/P:26


//Less Than 100?
function lessThan100(num1,num2) {
    if(num1+num2<100){
        return true
    }
    else{
        return false
    }
}
var res = lessThan100(22,15)
//O/P:true

// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
    let a=num1%num2
    return a
}
var res = remainder(6,15)
console.log(res)

//O/P:6

//Old macdonald had a farm:

function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*4+pigs*4
}
var legs = CountAnimals(2,3,5)
console.log(legs)
//O/P:36

//Frames Per Second
function frames(num1,num2) {
    return num1*num2*60
}
var fps = frames(10,25)
console.log(fps)
//O/P:15000

//Check if an Integer is Divisible By Five

function divisibleByFive(num1) {
    if(num1%5==0){
        return true
    }
    else{
        return false
    }
}
var divisible = divisibleByFive(-57)
console.log(divisible)

//O/P:false

//Write a function called “isEven”.
function isEven(num){
    if(num%2==0){
        return true
    }
    else{
        return false
    }
   }
   var even = isEven(5)
   console.log(even)

   //O/P:false


//Write a function called “areBothOdd”.

function areBothOdd(num1, num2){
    if(num1%2&&num2%2!==0){return true}
    else{return false}
   }
   var result=areBothOdd(1, 3);
   console.log(result)
//O/P:true


//Write a function called “getFullName”.

function getFullName(firstName, lastName){
        return firstName+" "+lastName
   }
   let result10=getFullName("GUVI","GEEK")
   console.log(result10)
   //GUVI GEEK

//Write a function called “getLengthOfWord”
   function getLengthOfWord(word1){
        return word1.length
   }
   let lengthOfWord=getLengthOfWord("sai")
console.log(lengthOfWord)
//O/P:3

//Write a function called “isSameLength”

function isSameLength(word1, word2){
        if(word1.length==word2.length){
            return true
        }
        else{
            return false
        }
   }

let result11 = isSameLength("sai","teja")
console.log(result11)
//O/P:false

//Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 let p=Math.pow((x2-x1),2);
 let q=Math.pow((y2-y1),2);
 let r=Math.sqrt(p-q,2)
 return r
}
//O/P:223.60679774997897

//Write a function called “getNthElement”.

console.log(getNthElement([1, 3, 5], 1))
function getNthElement(array,n){
    return array[n]
   }
//O/P:3

//Write a function called “getLastElement”
console.log(getLastElement([1, 2, 3, 4]))
function getLastElement(array){
        return array[array.length-1]
   }
//O/P:4

//Write a function called “getProperty”
var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
        if(obj[key]=="value"){
            return obj[key];
        }
        else{
            return undefined;
        }
   }
   console.log(getProperty(obj, "mykey"));

   //Output 1: value
   //Output 2: undefined(obj,"vikas") >>undefined

   //Add property
   var obj = {
    mykey: "value"
   };
   function addProperty(obj, key){
        obj[key]="mykey"
        obj["mykey"] ="true"
        
        return obj
   }
   console.log(addProperty(obj, "mykey"));

   //O/p: {mykey: 'true'}


   //Write a function called “removeProperty”.


   var obj = {
    mykey: "value"
   }
   function removeProperty(obj, key){
      if(obj[key]=="value"){
         delete obj[key]
         return obj
      } 
      else{
          return undefined
      }
        
   }
   console.log(removeProperty(obj, "vikas"));
   
//O/P:{}
//O/P:(obj, "vikas") --->undefined

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
   
var ar2 = []
ar2=function countPositivesSumNegatives(arr) {
    let countofPositive=0
    let sumofNegative=0;
    arr.map(item=>{
        if(item>0){
            countofPositive++ 
        }
        else if(item<0){
            sumofNegative+=item
        }
        else{
            return []
        }
    })
    return[countofPositive,sumofNegative]}
console.log(ar2(arr));

//O/P:[5, -17]
//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    for(let i=0; i<ar.length; i++){
        if(ar[i]<0){
            ar.splice(i, 1)
        }
    }
    return ar
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
//O/P:[10, 12, 5, 90, 0, 1]

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent)
let array=[]
function powersOfTwo(n){
  for(let i = 0; i < n; i++){
    let a=Math.pow(2,i);
    array.push(a)
  }
  let res=array
    return res;
  }

  console.log(powersOfTwo(5))

//O/P:[1, 2, 4, 8, 16]

//Find the maximum number in an array of numbers

function findMax(ar)
{
  let max=Number.MIN_SAFE_INTEGER
    for(let i=0;i<ar.length;i++){
    
    if(ar[i]>max){
        max=ar[i]
    }
    else{
        continue
    }
}
return max
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

//Max:  90

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
  var n = 0;
  var i = 2;
 
  while(n < nPrimes)
  {
  if (isPrime(i))
  {
  console.log(n, " → ", i);
  n++;
  }
 
  i++;
  }
}
// Returns true if a number is prime
function isPrime(n)
{
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}

//O/P:

//0 ' → ' 3
// Assign5prob1.js:482 1 ' → ' 5
// Assign5prob1.js:482 2 ' → ' 7
// Assign5prob1.js:482 3 ' → ' 9
// Assign5prob1.js:482 4 ' → ' 11
// Assign5prob1.js:482 5 ' → ' 13
// Assign5prob1.js:482 6 ' → ' 15
// Assign5prob1.js:482 7 ' → ' 17
// Assign5prob1.js:482 8 ' → ' 19
// Assign5prob1.js:482 9 ' → ' 21
// Assign5prob1.js:482 10 ' → ' 23
// Assign5prob1.js:482 11 ' → ' 25
// Assign5prob1.js:482 12 ' → ' 27
// Assign5prob1.js:482 13 ' → ' 29
// Assign5prob1.js:482 14 ' → ' 31
// Assign5prob1.js:482 15 ' → ' 33
// Assign5prob1.js:482 16 ' → ' 35
// Assign5prob1.js:482 17 ' → ' 37
// Assign5prob1.js:482 18 ' → ' 39
// Assign5prob1.js:482 19 ' → ' 41
// Assign5prob1.js:482 20 ' → ' 43
// Assign5prob1.js:482 21 ' → ' 45
// Assign5prob1.js:482 22 ' → ' 47
// Assign5prob1.js:482 23 ' → ' 49
// Assign5prob1.js:482 24 ' → ' 51
// Assign5prob1.js:482 25 ' → ' 53
// Assign5prob1.js:482 26 ' → ' 55
// Assign5prob1.js:482 27 ' → ' 57
// Assign5prob1.js:482 28 ' → ' 59
// Assign5prob1.js:482 29 ' → ' 61
// Assign5prob1.js:482 30 ' → ' 63
// Assign5prob1.js:482 31 ' → ' 65
// Assign5prob1.js:482 32 ' → ' 67
// Assign5prob1.js:482 33 ' → ' 69
// Assign5prob1.js:482 34 ' → ' 71
// Assign5prob1.js:482 35 ' → ' 73
// Assign5prob1.js:482 36 ' → ' 75
// Assign5prob1.js:482 37 ' → ' 77
// Assign5prob1.js:482 38 ' → ' 79
// Assign5prob1.js:482 39 ' → ' 81
// Assign5prob1.js:482 40 ' → ' 83
// Assign5prob1.js:482 41 ' → ' 85
// Assign5prob1.js:482 42 ' → ' 87
// Assign5prob1.js:482 43 ' → ' 89
// Assign5prob1.js:482 44 ' → ' 91
// Assign5prob1.js:482 45 ' → ' 93
// Assign5prob1.js:482 46 ' → ' 95
// Assign5prob1.js:482 47 ' → ' 97
// Assign5prob1.js:482 48 ' → ' 99
// Assign5prob1.js:482 49 ' → ' 101
// Assign5prob1.js:482 50 ' → ' 103
// Assign5prob1.js:482 51 ' → ' 105
// Assign5prob1.js:482 52 ' → ' 107
// Assign5prob1.js:482 53 ' → ' 109
// Assign5prob1.js:482 54 ' → ' 111
// Assign5prob1.js:482 55 ' → ' 113
// Assign5prob1.js:482 56 ' → ' 115
// Assign5prob1.js:482 57 ' → ' 117
// Assign5prob1.js:482 58 ' → ' 119
// Assign5prob1.js:482 59 ' → ' 121
// Assign5prob1.js:482 60 ' → ' 123
// Assign5prob1.js:482 61 ' → ' 125
// Assign5prob1.js:482 62 ' → ' 127
// Assign5prob1.js:482 63 ' → ' 129
// Assign5prob1.js:482 64 ' → ' 131
// Assign5prob1.js:482 65 ' → ' 133
// Assign5prob1.js:482 66 ' → ' 135
// Assign5prob1.js:482 67 ' → ' 137
// Assign5prob1.js:482 68 ' → ' 139
// Assign5prob1.js:482 69 ' → ' 141
// Assign5prob1.js:482 70 ' → ' 143
// Assign5prob1.js:482 71 ' → ' 145
// Assign5prob1.js:482 72 ' → ' 147
// Assign5prob1.js:482 73 ' → ' 149
// Assign5prob1.js:482 74 ' → ' 151
// Assign5prob1.js:482 75 ' → ' 153
// Assign5prob1.js:482 76 ' → ' 155
// Assign5prob1.js:482 77 ' → ' 157
// Assign5prob1.js:482 78 ' → ' 159
// Assign5prob1.js:482 79 ' → ' 161
// Assign5prob1.js:482 80 ' → ' 163
// Assign5prob1.js:482 81 ' → ' 165
// Assign5prob1.js:482 82 ' → ' 167
// Assign5prob1.js:482 83 ' → ' 169
// Assign5prob1.js:482 84 ' → ' 171
// Assign5prob1.js:482 85 ' → ' 173
// Assign5prob1.js:482 86 ' → ' 175
// Assign5prob1.js:482 87 ' → ' 177
// Assign5prob1.js:482 88 ' → ' 179
// Assign5prob1.js:482 89 ' → ' 181
// Assign5prob1.js:482 90 ' → ' 183
// Assign5prob1.js:482 91 ' → ' 185
// Assign5prob1.js:482 92 ' → ' 187
// Assign5prob1.js:482 93 ' → ' 189
// Assign5prob1.js:482 94 ' → ' 191
// Assign5prob1.js:482 95 ' → ' 193
// Assign5prob1.js:482 96 ' → ' 195
// Assign5prob1.js:482 97 ' → ' 197
// Assign5prob1.js:482 98 ' → ' 199
// Assign5prob1.js:482 99 ' → ' 201

//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    let Primes=[]
    for(let i=startAt; i<Number.MAX_SAFE_INTEGER;i++){
        if(isPrime(i)){
            Primes.push(i);
            if(Primes.length==nPrimes){
                break;
            }
            else{
                continue;
            }
        }
        else{
            continue;
        }
    }
  return Primes
}
//[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]
// Returns true if a number is prime
function isPrime(n)
{
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
        }
        return true;
}
//O/P:[101, 103, 105, 107, 109, 111, 113, 115, 117, 119]

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let t=""
   for(let i=s.length-1;i>0;i--) {
    t=t+s.charAt(i);
   }
   return t;
}

//O/P:tpircSava

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let e2 of ar2)
 {
     result.push(e2);
 }
 //Some piece of code goes here 
 
 return result;
}

//O/P:[1, 2, 3, 4, 5, 6]

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    let sum=0
    let input=s.split(",").map(Number)
    for(i=0;i<input.length;i++){
      sum=sum+input[i]  
    }
    return sum
}

//Print odd numbers in an array

let num50=[1,3,5,4,6,7,8,9]

let oddnum10=[]
oddnum10=num50.filter((x)=>x%2!==0);
console.log(oddnum10)
//[1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array

let a=["dhoni","rohith","kohli","shreyas iyer","rishabh"]

let titlecaps2=[]
titlecaps2=a.map((y)=>y.toUpperCase())
console.log(titlecaps2)

//['DHONI', 'ROHITH', 'KOHLI', 'SHREYAS IYER', 'RISHABH']

//Sum of all numbers in an array

let numbers=[1,7,8,5,6,4,15,46,58,765]

let total10=[]
total10=numbers.reduce((a,b)=>a+b,0)
console.log(total10)

//915

//Return all the prime numbers in an array

let primes=[]
primes=numbers.filter((x)=>{
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false
        }
        else{
            return x !==1
        }
        
    }
})
console.log(primes)

//[7,5,15,765]

let checkp=[474,4559,5445,5223,27652,286682]
let pallindrome2=[]
pallindrome2=checkp.filter((x)=>x==reverseString(x))
console.log(pallindrome2)


// let palindromes=[]
// let rev=""
// palindromes=(function(...num){
//     for(let i=0;i<num.length;i++){
//       let m=num[i].toString()
//       let k=m.length
//       if(k%2==0){
//         for(let j=0;j<k/2;j++){
//             if(m[j]==m[k-1-i]){
//             palindromes.push(num[i])
//         }
//         else{
//             continue
//         }
//         }
        
//       }
//       else{
//         continue
//       }
//     }
//     return palindromes
// })(474,4559,5445,5223,27652,286682)
// console.log(palindromes)





