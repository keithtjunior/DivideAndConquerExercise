function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = undefined;
    while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(arr[middleIdx] > arr[leftIdx] && arr[middleIdx] < arr[rightIdx]) return 0;
        if(arr[middleIdx] < arr[leftIdx] && arr[middleIdx] < arr[rightIdx]){
            if(arr[middleIdx-1] > arr[middleIdx]){
                return leftIdx + middleIdx;
            }else{
                rightIdx = middleIdx;
            }
        }else{
            if(arr[middleIdx+1] < arr[middleIdx]){
                return middleIdx+1;
            }else{
                leftIdx = middleIdx;
            }
        }
    }
}

module.exports = findRotationCount