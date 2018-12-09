function solution(n) {
    var answer = 0;
    var countup = 0;
    
    var targets = [];
    for(var i = 0 ; i <= n ; i++){ targets.push(true); }
    
    for(var i = 2 ; i <= Math.floor(Math.sqrt(n)) ; i++){
        for(var j = 2; j <= n ;j++){
            if(i !== j && j % i == 0){
                targets[j] = false; 
            }
        }
    }
    
    for(var i = 2 ; i <= n ; i++){ if(targets[i]){countup++;} }
    
    return countup;
}