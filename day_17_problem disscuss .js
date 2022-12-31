// Prime Numbers......

// let n = 10
// let check = true
// for(let i = 2;i*i<=n;i++){  // Math.sqrt(n)
//     if(n%i==0){
//         check = false
//         break;
//     }
// }
// console.log(check)


// Sieve algo

// let n = 10
// let arr = new Array(n)
// for(let i = 0;i<=n;i++)
//     arr[i] = true
// arr[0] = false
// arr[1] = false
// for(let i = 2;i*i<=n;i++){  // TC: o(n log log n)
//     if(arr[i]){
//         for(let j = i*i;j<=n;j+=i)
//             arr[j] = false
//     }
// }
// let ans = []
// for(let i = 2;i<=n;i++){
//     if(arr[i])
//         ans.push(i)
// }
// console.log(ans)

// find SquareRoot

// let n = 125
// for(let i = 1;i*i<=n;i++){   // i*i*i<=n  for cubeRoot
//     let j = i+1
//     if(j*j>n){
//         console.log(i)
//         break
//     }
// }