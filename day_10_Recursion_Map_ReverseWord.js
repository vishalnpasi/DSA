//let arr =  ["abc" , "pqr" , "xyz" , "jkl"]

function capitalisefn(arr) {
  let result = []
  if (arr.length == 0) return []
  let s = arr[0][0].toUpperCase() + arr[0].slice(1)

  result.push(s)
  return result.concat(capitalisefn(arr.slice(1)))
}

console.log(capitalisefn(arr))



//Reverse Word in the String....

function reverse(str) {
  if (str.length == 0) return ""
  return reverse(str.slice(1)) + str[0]
}
let str = "hello this is me ok"
function revSentWords(sent) {
  let words = sent.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = reverse(words[i])
  }
  words = words.join(" ")
  return words
}
console.log(revSentWords(str))

// object Vs Map diffrece
//Map can have anything as key - number , string , array , object etc.
// its easy to get length (or size) of a Map...map.size
// object keys are stirngs "name" , "1" both are stirng 
// Order of keys in Object it Not Maintained....In Map order of keys is fixed.
// heance it is better/predectable for of loop (or any iteration ) on a Map.


//print the number of duplicate in the array 
// //create hash map 
let arr = [23, 3, 2, 1, 3, 1]
function duplicate(arr){
  let frequency = new Map()
  for(let i = 0;i<arr.length;i++){
    if(frequency.get(arr[i])==undefined)
      frequency.set(arr[i],1);
    else
      frequency.set(arr[i],frequency.get(arr[i])+1)
  }
  let result = []
  for(let pairs of frequency){
    if(pairs[1]>1) result.push(pairs[0])
  }
  return result
}
console.log(duplicate(arr))