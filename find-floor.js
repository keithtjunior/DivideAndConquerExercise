function findFloor(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = undefined;
    while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(leftIdx === arr.length-2) middleIdx = leftIdx+1;
        if(arr[leftIdx] > target) return -1;
        if(arr[middleIdx] == target) return arr[middleIdx];
        if(arr[middleIdx] > target){
            if(arr[middleIdx-1] <= target) return arr[middleIdx-1];
            rightIdx = middleIdx;
        }else{
            if(!arr[middleIdx+1]) return arr[rightIdx];
            if(arr[middleIdx+1] > target) return arr[middleIdx];
            leftIdx = middleIdx;
        }
    }
}

module.exports = findFloor