
// Factorial No. using Recursion.......

// fact(n)= n * fact(n-1)
//          n * n-1 * fact(n-2)
//          n * n-1 * n-2 * fact(n-3)
//          n * n-1 * n-2 * n-3 * fact(n-4)
//          n * n-1 * n-2 * n-3 * n-4 ...1 return 1

// function factorial(n){
//     if(n==1) return 1
//     return n* factorial(n-1)
// }
// console.log(factorial(6))


// Febonacce find Nth elemetnt in the series...

// 1 1 2 3 5 8 13 21 34 55 89...

// fibo(5) = fibo(4) + fibo(3)
// fibo (n) = fibo(n-1) + fibo(n-2)

// function fibo(n){
//     if(n<=2)return 1;
//     return fibo(n-1)+fibo(n-2)
// }
// console.log(fibo(10))

// mutiplication of array..

// function product(arr){
//     console.log(arr)
//     if(arr.length==0) return 1
//     return arr[0] * product(arr.splice(1))
// }
// console.log(product([3,5,2,8]))

// let arr = [3,4,5,6]
// console.log(arr.splice(1))
// console.log(arr)

// function mul(arr,index){
//     if(index ==0) return arr[index]
//     return arr[index] * mul(arr,index-1)
// }
// let arr = [3,5,2,8]
// let index = arr.length-1
// console.log(mul(arr,index))


// Power of Number..

// pow(3 , 5) = 3 * pow(3 , 4)
//            = 3 * 3 * pow(3,3)
//            = 3 * 3 * 3 * pow(3,2)
//            = 3 * 3 * 3 * 3 * pow(3,1)
//            = 3 * 3 * 3 * 3 * 3 *pow(3,0)
//            = 3 * 3 * 3 * 3 * 3 * 1
//            = 243

// function pow(b , exp){
//     if(exp == 0) return 1
//     return b*pow(b,exp-1)
// }
// console.log(pow(3,5))