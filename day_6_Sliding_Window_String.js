// program for find the unique sub string in given string......

let lengthOfLogestSubString = (s)=>{

    let longestLength = 0;
    let i=0,start = 0;
    let map = {},mapSize=0;
    while(i < s.length) {

        if(!map[s[i]]){
            map[s[i]]=1
            mapSize++;
            if(longestLength<mapSize)
                longestLength = mapSize
            i++;
        }
        else{
            delete map[s[start++]];
            mapSize--
        }
    }
    return longestLength;
    // let SubStringStart = 0;
    // let SubStringEnd = 0;
    // let SwStart = 0;
    // let SwEnd = 0;
    // let windowUniqueChar = {}
    // while(SwEnd<str.length){
    //     if(!windowUniqueChar[str[SwEnd]]){

    //         if(SwEnd-SwStart>SubStringEnd-SubStringStart){
    //             SubStringStart = SwStart
    //             SubStringEnd = SwEnd;
    //         }
    //         windowUniqueChar[str[SwEnd]]=1;
    //         SwEnd++;
    //     }
    //     else {
    //         delete windowUniqueChar[str[SwStart++]]
    //     }
    // }
    // return [SubStringStart,SubStringEnd]
}
let str = 'hellothere' //'pwwakwsuhantlmnpppppppppppppppppppppppppppppppppppppppppppjjjjjjqzxerty'
let res  = lengthOfLogestSubString(str)
console.log(res)