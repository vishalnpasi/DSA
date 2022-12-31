// programe for get maximum sum in array of k numbers...

maxinumSumSubarray = (k,arr,n)=> {
    let curSum = 0
    let maxSum = 0
    for(let i = 0;i<k;i++){
        curSum+=arr[i];
    }
    maxSum = curSum
    for(let i = k;i<n;i++){
        curSum+=arr[i]
        curSum-=arr[i-k]
        if(maxSum<curSum) maxSum = curSum
    }
    return maxSum
}
let arr = [ 1,3,2,8,4,7,9,5,1]
let k = 3
let res = maxinumSumSubarray(k,arr,arr.length);
console.log(res)


// let obj = {}
// let arr  = [ [1,2],[1,2],[1,3]]

// for(let i = 0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]=1
//     }
// }
// console.log(obj)