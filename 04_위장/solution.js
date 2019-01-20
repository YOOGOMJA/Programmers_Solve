function solution(clothes) {
    var answer = 1;
    var filtered = {};
    var keys = [];
    for(var i= 0 ; i < clothes.length ; i++){
        if(!filtered[clothes[i][1]]){
            filtered[clothes[i][1]] = 1;
            keys.push(clothes[i][1]);
        }
        else{
            filtered[clothes[i][1]]+=1;
        }
    }    
    
    for(var i = 0 ; i < keys.length ; i++){
        // 해당 의상을 안입는 경우를 계산하기 위해 +1
        answer *= filtered[keys[i]] + 1;
    }
    // 아무것도 안입는 경우를 제외하기 위해 -1
    return answer-1;
}