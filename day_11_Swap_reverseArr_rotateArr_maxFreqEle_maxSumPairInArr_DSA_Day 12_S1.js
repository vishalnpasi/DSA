// // swap to string without third variable...

// let a = 'some'
// let b = 'goodDay'

// a +=b
// b = a.substring(0,a.length-b.length)
// a = a.substring(b.length,a.length)
// console.log(a,b)

// // Reverse Array without use extra array...

// function reverse(arr,l,r){
//     if(l>r) return arr
//     arr[l] = arr[l]+arr[r]
//     arr[r] = arr[l]-arr[r]
//     arr[l] = arr[l]-arr[r]
//     return reverse(arr,l+1,r-1)
// }
// let arr = [1,2,3,4,5,6]
// console.log(reverse(arr,0,arr.length-1))


// // Write a JS program to cyclically rotate an array - rotate(arr,d) that rotates arr by d elements


// function reverse(str) {
//     if (str.length == 0) return str[0]
//     return reverse(str.slice(1)) + str[0]
// }
// let arr = [1,2,3,4,5,6]
// console.log(reverse(arr))

//Given an Array of repeated element return the most repeated element from the array...
// highet frequency element in an array..

// let arr = [ 23,56,678,12,2,34,23,98,12,3,12,2,12]
// let map = {}
// let mx =0 , key
// for(let i = 0;i<arr.length;i++){
//     map[arr[i]] = (map[arr[i]] || 0) +1
//     if(map[arr[i]]>mx){
//         mx = map[arr[i]]
//         key = arr[i]
//     }
// }
// console.log(mx , key)


// Find the maximum sum of any Two element in an array....

let arr = [12,4,55,67,2,34] //.....[67+34]

let mx = arr[0] , sno = -1
for(let i = 0;i<arr.length;i++){
    if(arr[i]>mx){
        sno = mx
        mx = arr[i]
    }
    else if(sno<arr[i])
    sno = arr[i]
}
console.log(mx ,sno)