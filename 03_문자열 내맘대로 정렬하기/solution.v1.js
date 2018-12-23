function solution(strings, n) {
    var answer = [];
    
    strings.sort(( next, current ) => { 
        let test = next[n] > current[n] ? 1 : next[n] < current[n] ? -1 : 0; 
        if(test === 0){
            return next > current ? 1 : next < current  ? -1 : 0;
        }
        return test; 
    });
    
    return strings;
}