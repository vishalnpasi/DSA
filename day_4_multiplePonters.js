// find 0 sum of pairs in the sorted array...
// let arr = [-5,1,2,-2,-3,4,6]
// arr.sort((a,b) => a-b)
// console.log(arr)
// let j = arr.length-1
// let i = 0
// let result = 0
// while(i<j){
//     if(arr[i]+arr[j]==0){
//         result = [arr[i],arr[j]]
//         break;
//     }
//     if(arr[i]+arr[j]>0)
//         j--
//     else i++
// }
// console.log(result)


//find x sum of pairs in the sorted array..

// let arr = [-5,-3,-2,1,2,4,6]
// let i = 0,j = arr.length-1
// let result = 0 , x = 4
// while(i<j){
//     if(arr[i]+arr[j]==x){
//         result = [arr[i],arr[j]]
//         break;
//     }
//     if(arr[i]+arr[j]>x)
//         j--
//     else i++
// }
// console.log(result)


//find the pair that sums closest to 12 in sorted array....

// let arr = [1,2,5,8,9,14]
// let distance = Infinity
// let result = 0
// let i = 0 ,j = arr.length-1;
// while(i<j){
//     if(Math.abs(arr[i]+arr[j]-12)<distance){
//         distance = Math.abs(arr[i]+arr[j]-12)
//         result = [arr[i],arr[j]]
//     }
//     if(arr[i]+arr[j]>12){
//         j--;
//     }
//     else i++;
// }
// console.log(result)


// let a =6 , b =[1,2,3,4,5,5]
// let min = Infinity
// let diff = -1
// let index
// for(let i in b){
//     if(b[i]<min){
//         min=b[i]
//         index = i
//     }
//     else if(b[i]==min){
//         diff = i-index
//         index = i
//     }
// }
// console.log(diff)


let   arr = [1,1,2,2,3,4,4,5,6,7,8,8];
let obj = {}
let res = []
for(let i = 0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]] = 1
    }
    else obj[arr[i]]++
}
for(let i of Object.keys(obj)){
    if(obj[i]==1)
        res.push(Number(i))
}
console.log(res)


//

// function closestSum(arr,n,x){
//     let start = 0;
//     let end = n-1;
//     let sum 
//     let diff  = Number.MAX_VALUE
//     while(start<end){

//         if(Math.abs(arr[start]+arr[end]-x)<diff){
//             sum = [arr[start],arr[end]]
//             diff = Math.abs(arr[start]+arr[end]-x)
//         }
//         if((arr[start]+arr[end])<x) start++
//         else end--;
//     }
//     return sum
// }
// let arr = [10,22,28,29,30,40];
// let n = 6
// let x = 54
// let res = closestSum(arr,n,x)
// console.log(res)
