function solution(arr) {
    if(arr.length <= 1){ return [-1]; }
    var min = arr[0];
    var minIndex = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(min > arr[i]) {
            min = arr[i];
            minIndex = i;
        }
    }
    arr.splice(minIndex,1);
    return arr;
}