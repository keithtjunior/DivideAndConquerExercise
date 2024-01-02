function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = undefined;
    let rightVal = arr[rightIdx];
    let leftVal = arr[leftIdx];
    while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(arr[middleIdx] === target) return middleIdx;
        if(arr[middleIdx+1] === target) return middleIdx+1;
        if(arr[middleIdx-1] === target) return middleIdx-1;
        if(target < rightVal && target < arr[middleIdx]) leftIdx = middleIdx+1;
        else if(target > leftVal && target < arr[middleIdx]) rightVal = middleIdx;
        else return -1;
    }
    return -1;
}

module.exports = findRotatedIndex