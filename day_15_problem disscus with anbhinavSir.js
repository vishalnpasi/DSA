// count duplicate element in array...


// count no. of pairs in array of size k
// [ 1,2,3,5,3,4,1,7] k = 6
// function countPairs(arr,n,k){
    
//     let map = new Map()
//     let ans = 0
//     for(let i = 0 ;i<n;i++){
//         let comp = k-arr[i]
//         if(map.has(comp)){
//             ans+=map.get(comp)
//         }
//         if(map.has(arr[i]))
//             map.set(arr[i],map.get(arr[i])+1)
//         else 
//             map.set(arr[i],1)
//     }
//     return ans
// }
// let arr = [ 1,2,3,5,3,4,1,7,5] 
// let k =6;
// console.log(countPairs(arr,arr.length,k))



// program to check if a number is a float or integer value

// function checkNumber(x){
//     //check if the passed value is a nunbers
//     if(typeof x =='number' && !isNaN(x)){
//         if(Number.isInteger(x)){
//             console.log(`${x} is integer`);
//         }
//         else{
//             console.log(`${x} is float value..`)
//         }
//     }
//     else{
//         console.log(`${x} is not a number...`)
//     }
// }
// checkNumber('hello')
// checkNumber(5)
// checkNumber(1.5)
// checkNumber('123')


