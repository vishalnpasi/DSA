// count frequency of element in array......
// let arr = [1,2,7,3,4,2,1]

// let map = new Map();
// for(let i = 0;i<arr.length;i++){
//     if(map.has(arr[i]))
//         map.set(arr[i],map.get(arr[i])+1)
//     else 
//         map.set(arr[i],1)
// }
// map.forEach((value,key) =>{
//     console.log('key = ',key,' and value = ',value)
// })


let arr = [ 2,1,2,0,1,0]
let map = {}
let mx = 0 ,key
for(let i = 0;i<arr.length;i++){
    map[arr[i]] = (map[arr[i]] || 0)+1

    if(mx<map[arr[i]]){
        mx = map[arr[i]]
        key = arr[i]
    }
    if(mx==map[arr[i]] && key>arr[i]){
        key = arr[i]
    }
}
console.log(key,mx)