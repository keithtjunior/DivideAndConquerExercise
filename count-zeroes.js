function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = 0;
    if(arr[leftIdx] === 0) return arr.length;
    if(arr[rightIdx] === 1) return 0;
    while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (middleIdx === 0) return 1;
        else if(arr[middleIdx] > arr[middleIdx+1]) return arr.length - (middleIdx+1);
        else if(arr[middleIdx] < arr[middleIdx-1]) return arr.length - middleIdx;
        else{
            if(arr[middleIdx] === 0) rightIdx = middleIdx;
            else leftIdx = middleIdx;
        }
    }
}

module.exports = countZeroes