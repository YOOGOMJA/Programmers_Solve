// https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
function solution(n) {
    var answer = 0;
    var countup = 0;
    
    for(var i = 2; i <= n;i++){
        var isPossibleToDevide = false;
        for(var j = i % 2 === 0 ? 2 : 3 ; j < i ; j+=2){
            if(i % j === 0){ 
                isPossibleToDevide = true;
                break; 
            } 
        }
        if(!isPossibleToDevide){ countup++; }
    }
    
    return countup;
}