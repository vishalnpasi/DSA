// function pivot(nums, start, end) {
//     let pivot = nums[start]
//     let pivotIndex = start
//     for (let i = start; i <= end; i++) {
//         if (nums[i] < pivot) {
//             pivotIndex++
//             [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]]
//             //  console.log(nums)
//         }
//     }
//     [nums[start], nums[pivotIndex]] = [nums[pivotIndex], nums[start]]
//     // console.log(nums)
//     return pivotIndex
// }
// kthSmallest(nums, l, r, k){
//     //code here

//     let start = l;
//     let end = r
//     k = k - 1
//     while (start <= end) {
//         let pivotIndex = this.pivot(nums, start, end)
//         if (pivotIndex == k) {
//             //   console.log(nums)
//             return nums[k]
//         }
//         else if (pivotIndex > k) {
//             end = pivotIndex - 1
//         }
//         else {
//             start = pivotIndex + 1
//         }
//     };
// }


// bubble sort...
// let arr =[ 6,5,4,3,2,1]
// let len = arr.length
// for(let i =0 ;i<len;i++){
//     for(let j =0;j<len-1;j++){
//         if(arr[j]>arr[j+1]){
//             let t = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = t
//         }
//             // [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//     }
// }
// console.log(arr)

// selection sort...
// for(let i = 0;i<len;i++){
//     let k =i;
//     for(let j = i+1;j<len;j++){
//         if(arr[k]>arr[j]){
//             k = j
//         }
//     }
//     let t = arr[k]
//     arr[k] = arr[i]
//     arr[i] = t
// }
// console.log(arr)
// insertion sort...
// for(let i = 0;i<len;i++){
//     let temp = arr[i+1]
//     let loc = i
//     while(loc>=0 && arr[loc]>temp){
//         arr[loc+1] = arr[loc]
//         arr[loc--] = temp
//     }
// }
// console.log(arr)

// merge sort...
// function mergeSort(arr,low,mid,high){
//     let i = low , k = low , j = mid+1
//     let sort = []
//     while(i<=mid && j<=high){
//         if(arr[i]<arr[j])
//             sort[k++] = arr[i++]
//         else   
//             sort[k++] = arr[j++]
//     }
//     while(i<=mid){
//         sort[k++] = arr[i++]
//     }
//     while(j<=mid){
//         sort[k++] = arr[j++]
//     }
//     for(let i = low;i<k;i++) arr[i] = sort[i]
// }
// function merge(arr,low ,high){
//     if(low<high){
//         let mid = (low+high)/2<<0
//         merge(arr,low,mid)
//         merge(arr,mid+1,high)
//         mergeSort(arr,low,mid,high)
//     }
// }
// merge(arr,0,len-1)
// console.log(arr)
// quick sort...
// quick(arr,0,len-1)
// console.log(arr)
// function quick(arr,low,high){
//     if(low<high){
//         let p = partation(arr,low,high)
//         quick(arr,low,p-1)
//         quick(arr,p+1,high)
//     }
// }
// function partation(arr,low,high){
//     let pivot = arr[high]
//     let start = low
//     for(let i = low;i<high;i++){
//         if(arr[i]<pivot){
//             // [arr[i],arr[start]] = [arr[start],arr[i]]
//             let t = arr[i]
//             arr[i] = arr[start]
//             arr[start] =t
//             start++
//         }
//     }
//     let t = arr[start]
//     arr[start] = arr[high] //pivot
//     arr[high] =t
//     return start
// }













