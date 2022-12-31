// Bubble Sort.....

// let arr = [ 5,4,3,2,1]

// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr)


// Insertion Sort........

// let arr = [ 5,4,3,2,45,42,190,1]

// for(let i = 1;i<arr.length;i++){

//     let key = arr[i]
//     let j = i-1
//     while(j>=0 && key<arr[j]){
//         arr[j+1] = arr[j]
//         arr[j] = key
//         j--
//     }
// }
// console.log(arr)


// Selection Sort.........

// let arr = [ 5,4,3,2,45,42,190,1]
// let n = 8
// for(let i = 0;i<n;i++){
//     let k = i
//     for(let j = i+1;j<n;j++){
//         if(arr[k]>arr[j])
//             k = j
//     }
//     [arr[k], arr[i]] = [arr[i],arr[k]]
// }
// console.log(arr)


// Quck Sort........


// function partation(arr,low,high){
//     let pivot = arr[high]
//     let i = low
//     for(let j = low;j<high;j++){
//         if(arr[j]<pivot){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             i++
//         }
//     }
//     let t = arr[i]
//     arr[i] = pivot
//     arr[high] = t
//     return i
// }
// function quickSort(arr,low,high){
//     if(low<high){
//         let p = partation(arr,low,high)
//         quickSort(arr,low,p-1)
//         quickSort(arr,p+1,high)
//     }
// }
// let arr = [ 5,4,3,2,45,42,190,1,-1,-111,-2]
// let n = 11
// quickSort(arr,0,n-1)
// console.log(arr)


// Merge Sort.........

// function merge(arr,low,mid,high){
//     let i = low,k=low,j = mid+1;
//     let sort = []
//     while(i<=mid && j<=high){
//         if(arr[i]<arr[j])
//             sort[k++] = arr[i++]
//         else
//             sort[k++] = arr[j++]
//     }
//     while(i<=mid)
//         sort[k++] = arr[i++]
//     while(j<=high)
//         sort[k++] = arr[j++]
//     for(let i = low;i<k;i++)
//         arr[i] = sort[i]
// }
// function mergeSort(arr,low,high){
//     if(low<high){
//         let mid = (low+high)/2<<0
//         mergeSort(arr,low,mid);
//         mergeSort(arr,mid+1,high);
//         merge(arr,low,mid,high)
//     }
// }
// let arr = [ 5,4,3,2,45,42,190,1]
// let n = 8
// mergeSort(arr,0,n-1)
// console.log(arr)
