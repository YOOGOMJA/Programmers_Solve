function solution(n) {
    var answer = 0;
    var countup = 0;
    
    var targets = [];
    for(var i = 0 ; i <= n ; i++){ targets.push(true); }
    
    for(var i = 2 ; i <= Math.floor(Math.sqrt(n)) ; i++){
        for(var j = i; j <= n ; j+=i){
            if(i !== j){
                targets[j] = false; 
            }
        }
    }
    for(var i = 2 ; i <= n ; i++){ if(targets[i]){countup++;} }
    
    return countup;
}