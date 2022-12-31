// Reverse String....

// hello = reverse('ello')               + h
//       = reverse('llo')               e + h
//       = reverse('lo')          + l + e + h
//       = reverse('o')       + l + l + e + h
//       =        'o'         + l + l + e + h
// function reverse(str){
//     if(str.length<=1)return str
//     return reverse(str.slice(1))+str[0]
// }
// console.log(reverse('HI THERE'))

// function reverseStr(str,i){
//     if(i==0)return str[0]
//     return str[i]+reverseStr(str,i-1)
// }
// console.log(reverseStr('hello',4))


// Check if the String is Palindrome or not...

// REFER  : return (R == R && isPlr('EFE'))
//        : return (R == R && isPlx('F'))

// optimize way..
// function isPlr(str){
//     if(str.length<=1)return true;
//     return (str[0]==str.slice(-1) && isPlr(str.slice(1,-1)))
// }
// console.log(isPlr('refer'))

// simple way
// function isPlr(str){

//     if(str.length<=1)return true
//     if(str[0]==str.slice(-1)) return isPlr(str.slice(1,-1))
//     else return false
// }
// console.log(isPlr('refer'))

// function checkPalindrome(str,l,r){
//     if(l>=r)return true
//     if(str[l]!=str[r])
//         return false
//     return checkPalindrome(str,l+1,r-1)
// }
// console.log(checkPalindrome('madam',0,4))


// Program for Flatten array...
//1
// function flatten(arr){
//     let flat = []
//     for(let i = 0;i<arr.length;i++){
//          if(Array.isArray(arr[i])==false) flat.push(arr[i])
//          else  flat = flat.concat(flatten(arr[i]))
//     }    
//     return flat
//  }
//  console.log(flatten([1,2,3,[4,5,[45],6],8]))

//2
// function flattenStr(arr){
//     let flat = ""
//     for(let i = 0;i<arr.length;i++){

//         if(!Array.isArray(arr[i])) flat+=arr[i]

//         else flat += flattenStr(arr[i])
//     }
//     return flat
// }
// let str = ['hi','hello',['there',['hi']]]
// console.log(flattenStr(str))


// function flatten(arr){
//    let flat = []
//    for(let i = 0;i<arr.length;i++){
//         if(Array.isArray(arr[i])==false) flat.push(arr[i])
//         else {
//            let res =  flatten(arr[i])
//            for(let j = 0;j<res.length;j++)
//             flat.push(res[j])
//         }
//    }    
//    return flat
// }
// console.log(flatten([1,2,3,[4,5,[45],6],8]))

// Program for capitalize the first latter in given array of string....

// ['hi','hello','there']  =>  ['Hi','Hello','There']

// function capitalize(arr,i){
//     if(i==arr.length) return arr
//     let s = arr[i][0].toUpperCase()
//     s += arr[i].slice(1)
//     arr[i] = s
//     return capitalize(arr,i+1)
// }
// let arr = ['hi','hello','there']
// // console.log(capitalize(arr,0))
// function capitalize(arr){
//     let result =[]
//     if(arr.length == 0 )return []
//     let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    
//     result.push(s)
//     return result.concat(capitalize(arr.slice(1)))
// }
// console.log(capitalize(arr))
