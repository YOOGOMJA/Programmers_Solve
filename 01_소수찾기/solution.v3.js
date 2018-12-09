function solution(n) {
    var answer = 0;
    var countup = 0;
    
    var targets = [];
    for(var i = 0 ; i <= n ; i++){ targets.push(true); }
    
    for(var j = 2 ; j <= n ; j++){
        for(var i = 2; i <= Math.floor(Math.sqrt(n)) ; i++){
            if(i !== j && j % i == 0){
                targets[j] = false; 
                break;
            }
        }
        if(targets[j]){ countup++; }
    }
    
    return countup;
}