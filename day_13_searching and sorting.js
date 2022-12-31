// Binary Search in sorted Array.....

// mid = start+(end-start)/2 = start + end/2 - start/2 + end/2 = (start+end)/2

// function findK(arr,k){
//     let l = 0 , mid , r = arr.length-1
//     while(l<=r){
//         mid = (l+r)/2<<0
//         if(arr[mid]==k)
//             return mid
//         else if(arr[mid]<k)
//             l = mid+1
//         else r = mid-1
//     }
//     return -1
// }
// function findK(arr,l , r , k){
//     let mid = (l+r)/2<<0
//     if(l>r) return -1
//     if(arr[mid] == k) return mid
//     else if(arr[mid]<k) return findK(arr,mid+1,r,k)
//     else return findK(arr,l,mid-1,k)
// }
// let arr = [3,7,11,34,78,90,92,96,98]
// let k = 98
// console.log(findK(arr,k))
// console.log(findK(arr,0,arr.length,k))


// Sorting.......

//Bubble sort...

// let arr = [4,3,2,5,7,4,2,9]
// let len = arr.length , swap = false
// for(let j = 0;j<len;j++){
//     swap = false
//     for(let i = 0;i<len;i++){
//         if(arr[i]>arr[i+1]){
//             arr[i]  = arr[i]+arr[i+1]
//             arr[i+1]  = arr[i]-arr[i+1]
//             arr[i]  = arr[i]-arr[i+1]
//             swap = true
//         }
//     }
//     if(!swap) break
// }
// console.log(arr)


// Merge Sort....

//1st approach....


// let arr = [2,7,9,8,11,13,15,35,1]
// let n = arr.length
// let s = 0
// let e = n-1
// mergeSort(arr,s,e)
// console.log(arr);


// function concquer(arr, s ,mid, e){
//     let lenLeftArr = mid-s+1
//     let lenRightArr = e-mid

//     let leftArr = new Array(lenLeftArr)
//     let rightArr = new Array(lenRightArr)

//     for (let i = 0; i < lenLeftArr; i++) {
//         leftArr[i] = arr[s+i]     
//     }
//     for (let i = 0; i < lenRightArr; i++) {
//         rightArr[i] = arr[mid+1+i]
//     }
//     let l=0, r=0, f =s
//     while(l<lenLeftArr && r<lenRightArr){
//         if(leftArr[l] <= rightArr[r]){
//             arr[f] = leftArr[l]
//             l++
//         }else{
//             arr[f] = rightArr[r]
//             r++
//         }
//         f++
//     }
//     while (l<lenLeftArr) {
//         arr[f] = leftArr[l]
//         l++
//         f++
//     }
//     while (r<lenRightArr) {
//         arr[f] = rightArr[r]
//         r++
//         f++
//     }
// }
// function mergeSort(arr,s,e){
//     //1.divide 
//     //2.concquer
//     //base
//     if(s >= e) return
//     let mid =Math.floor( (s+e) / 2 )
//     mergeSort(arr,s,mid)
//     mergeSort(arr,mid+1,e)
//     concquer(arr , s, mid, e)
// }


// 2nd approach..
// function merge(arr,low , mid , high){
//     let i = low , k = low , j = mid+1
//     let sort = []
//     while(i<=mid && j<=high){
//         if(arr[i]<arr[j]){
//             sort[k++] = arr[i++]
//         }
//         else{
//             sort[k++] = arr[j++]
//         }
//     }
//     while(i<=mid){
//         sort[k++] = arr[i++]
//     }
//     while(j<=high){
//         sort[k++] = arr[j++]
//     }
//     for(let i = low;i<k;i++)
//         arr[i] = sort[i]
// }
// function mergeSort(arr , low , high){
    
//     if(low<high){       // if(low>=high) return
//     let mid = (low+high)/2<<0
//     mergeSort(arr,low,mid)
//     mergeSort(arr,mid+1,high)
//     merge(arr,low , mid , high)
//     }
// }

// let arr = [4,3,2,5,7,4,2,9]
// mergeSort(arr,0 , arr.length-1)
// console.log(arr)


//Rotate the Array with K times clock-wise.....

// const reverse = (arr,l,r) =>{
//     while(l<r){
//         [arr[l],arr[r]] = [arr[r],arr[l]]
//         l++,r--
//     }
// }
// let arr = [1,2,3,4,5] , n = 5
// let k = 4
// reverse(arr,0,n-1)
// reverse(arr,0,k-1)
// reverse(arr,k,n-1)
// console.log(arr)


// Largest Pair in Array.....

// let arr = [1,2,4,54,38,37,89,34]
// let mx = arr[0] , sno = 0 ,tno =0
// for(let i = 0;i<arr.length;i++){

//     if(mx<arr[i]){
//         tno = sno
//         sno = mx
//         mx = arr[i]
//     }
//     else if(sno<arr[i]){
//         tno = sno
//         sno = arr[i]
//     }
//     else if(tno<arr[i])
//         tno = arr[i]
// }
// console.log(mx,sno,tno)