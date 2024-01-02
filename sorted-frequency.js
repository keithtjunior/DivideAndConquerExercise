function sortedFrequency(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = undefined;
    let startCountIdx = undefined;
    let endCountIdx = undefined;
    while(leftIdx <= rightIdx){
        if(arr[arr.length-1] < num || arr[0] > num) return -1;
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(startCountIdx === undefined){
            if(arr[middleIdx] === num){
                if(arr[middleIdx-1] < num){
                    startCountIdx = middleIdx;
                    leftIdx = middleIdx;
                } 
                else if(arr[middleIdx-1] === num){
                    if(middleIdx-1 === 0){
                        startCountIdx = middleIdx-1;
                        leftIdx = middleIdx;
                    }else{
                        rightIdx = middleIdx;
                    }
                } 
            }else if(arr[middleIdx] < num){
                if(arr[middleIdx+1] === num ){
                    startCountIdx = middleIdx+1;
                    leftIdx = startCountIdx;
                    rightIdx = arr.length - 1;
                }else{
                    leftIdx = middleIdx;
                }
            }else{
                if(arr[middleIdx-1] < num){
                    return 0;
                }else{
                    rightIdx = middleIdx;
                } 
            }
        }else{
            if(arr[middleIdx] === num){
                if(middleIdx === arr.length - 1){
                    endCountIdx = middleIdx;
                    return endCountIdx - startCountIdx + 1;
                }else if(arr[middleIdx+1] > num ){
                    endCountIdx = middleIdx+1;
                    return endCountIdx - startCountIdx;
                } 
                else if(arr[middleIdx+1] === num ){
                    leftIdx = middleIdx;
                } 
            }else{
                if(arr[middleIdx-1] === num ){
                    endCountIdx = middleIdx-1;
                    return endCountIdx+1 - startCountIdx;
                } 
            }
        }
    }
}

module.exports = sortedFrequency