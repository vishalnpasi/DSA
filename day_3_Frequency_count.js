// Program for Frequency Count of Square Number...TC = O(n)

// BrutFours Approach.....
// let arr1 = [1,2,3]
// let arr2 = [1,4,9]
// let res = same(arr1,arr2)
// console.log(res)

// function same(arr1 , arr2){
//     if(arr1.length!=arr2.length)
//         return false;
//     for(let i = 0;i<arr1.length;i++){
//         let check = arr2.indexOf(arr1[i]**2)
//         if(check ==-1) return false
//     }
//     return true;
// }

// 2

// let arr1 = [1,2,3]
// let arr2 = [1,4,9]
// let res = same(arr1,arr2)
// console.log(res)

// function same(arr1 , arr2){
//     if(arr1.length!=arr2.length)
//         return false;
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1)
//         frequencyCounter1[val]=(frequencyCounter1[val] || 0) + 1;

//     for(let val of arr2)
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

//     for(let key in frequencyCounter1){
//         if(!frequencyCounter2[key**2])
//             return false
//         if(frequencyCounter2[key**2] !== frequencyCounter1[key])
//             return false
//     }
//     return true
// }

// 2

// function checkFrequency(A,B){
//     let objA = {}
//     let objB = {}
//     for(let i =0;i<A.length;i++){
//         if(objA[A[i]])
//             objA[A[i]]++;
//         else    
//             objA[A[i]]=1;
//     }
//     for(let i =0;i<B.length;i++){
//         if(objB[B[i]]) 
//             objB[B[i]]++;
//         else 
//             objB[B[i]] = 1;
//     }
//     let objAKeys = Object.keys(objA)

//     for(let key of objAKeys){
//         if(objB[key * key]!=objA[key]){
//             return false
//         }
//     }
//     return true
// }
// let A = [3,4,3,6]
// let B = [16,36,9,9]
// let res = checkFrequency(A,B)
// console.log(res)


// Program for Anagrams ...........TC - O(n)
// 1 

// In Optimize Way
function areAnagram(str1 , str2){

    //If both strings are of different length.
    //Removing this condition will make the program
    //fail for strings like "aaca" and "aca"
    if(str1.length!= str2.length) 
        return false;

    let NO_OF_CHARS = 26;
    let count1 = new Array(NO_OF_CHARS)
    let count2 = new Array(NO_OF_CHARS)
    // Create 2 count arrays and initiallize all value as 0
    for(let i = 0;i < NO_OF_CHARS ;i++)
    {
        count1[i] = 0;
        count2[i] = 0;
    }
    let i;
    //For rach character in input strings ,
    //increment count in the corresponding count array
    for(i = 0; i < str1.length && i <str2.length ; i++){
        count1[str1[i].charCodeAt(0)]++;
        count2[str2[i].charCodeAt(0)]++;
    }
    // Compare count arrays
    for(i = 0; i < NO_OF_CHARS ; i++)
        if(count1[i]!=count2[i])
            return false
    return true
}
let str1 = "vishal"
let str2 = "ishalv"
let res = areAnagram(str1,str2)
console.log(res);


// 2
//BruteForce Approach...
// function areAnagram(str1 , str2){

//     //Get lengths of both strings
//     let n1 = str1.length;
//     let n2 = str2.length;

//     // If length of both strings is not same.
//     //then they cannot be anagram
//     if(n1 !=n2)
//         return false;

//     // Sort both Strings
//     // str1.sort();
//     // str2.sort();
//     for(let i =0;i<n1;i++){
//         for(let j = i+1;j<n1;j++){
//             if(str1[i]>str1[j])
//                 [str1[i],str1[j]] =[str1[j],str1[i]]
//             if(str2[i]>str2[j])
//                 [str2[i],str2[j]] =[str2[j],str2[i]]
//         }
//     }
//     console.log(str1,str2)
//     //Compare sorted Strings
//     for(let i = 0;i < n1;i++)
//         if(str1[i] != str2[i])
//             return false;
//     return true;
// }

// let str1 = "vishal"
// let str2 = "ishalv"
// let res = areAnagram(str1,str2)
// console.log(res);

//3 example.....

// let s1 = "vishal"
// let s2 = "ishavl"
// let res = checkIsAnagram(s1,s2)
// console.log(res)
// function checkIsAnagram(s1,s2){
//     if(s1.length!=s2.length)return false
//     let objA ={}
//     let objB ={}
//     for(let i =0;i<s1.length;i++){
//         if(objA[s1[i]])
//             objA[s1[i]]++;
//         else 
//             objA[s1[i]]=1;
//     }
//     for(let i =0;i<s2.length;i++){
//         if(objB[s2[i]])
//             objB[s2[i]]++;
//         else 
//             objB[s2[i]]=1;
//     }
//     for(let i =0;i<s1.length;i++){
//         if(objA[s1[i]]!=objB[s1[i]])
//             return false
//     }
//     return true
// }

//Program for count of frequency character in the String....

// let str = "vishalpasi"
// let res = countChar(str)
// function countChar(str){
//     let obj ={}
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]])
//             obj[str[i]]++;
//         else 
//             obj[str[i]]=1
//     }
//     let keys = Object.keys(obj)
//     for(let i=0;i<keys.length;i++){
//         console.log(keys[i],"  ",obj[keys[i]])
//     }
// }