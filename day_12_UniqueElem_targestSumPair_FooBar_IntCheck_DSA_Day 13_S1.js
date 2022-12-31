// count frequency of element in the array

// let arr = [1,1,2,22,3,5,11,2]
// // result = [22,3,5,11]
// let map  = new Map()
// for(let i = 0;i<arr.length;i++){

//     if(map.get(arr[i]))
//         map.set(arr[i],map.get(arr[i])+1)
//     else 
//         map.set(arr[i],1)
// }
// let res = []
// for(let pairs of map){
//     if(pairs[1]==1)
//         res.push(pairs[0])
// }
// console.log(res)

// find unique pairs of an elements(inside an array ) whos sum is equal to target K
// input = [7 , 2 , 4 , 6 , 9 , 11 , 34 , 3 , 2 , 1]
// output = [[2,3],[4,1]]
// let arr = [7 , 2 , 4 , 6 , 9 , 11 , 34 , 3 , 2 , 1]
// let k = 5
// let map = new Map()
// for(let i = 0;i<arr.length;i++){
//     map.set(arr[i],1)
// }
// let res = [] , comp
// for(let pairs of map){
//     map.delete(pairs[0])
//     comp = k-pairs[0]
//     if(map.get(comp)){
//         res.push([pairs[0],comp])
//         map.delete(comp)
//     }
// }
// console.log(res)

// take an input and check it's Integer or Not......

// approach 1
// const checkInt = (no) =>{
//     if(no.length!=undefined || no!=no<<0)
//         return false
//     return true
// }

// approach 2
// function checkInt(no){
//     return /^-?[0-9]+$/.test(no)
// }
// let no = -1
// let res = checkInt(no)
// console.log(res)


// take a number and if number is divisible of 3 then print 'foo'
// if multiple of 5 then print 'bar'
// if multiple of both 5 and 3 then print 'foobar'
// function checkNo(no){
//     if(no%5==0 && no%3==0)
//         return 'foobar'
//     else if(no%3==0)
//         return 'foo'
//     else if(no%5==0)
//         return 'bar'
//     else 
//         return 0
// }
// let no = 50
// console.log(checkNo(no))