function solution(answers) {
    var answer = [];
    
    var result = [0,0,0];
    
    var pattern1 = [1,2,3,4,5];
    var pattern2 = [2,1,2,3,2,4,2,5];
    var pattern3 = [3,3,1,1,2,2,4,4,5,5];
    for(var i = 0 ; i < answers.length ; i++){
        var p1_idx = i % pattern1.length;
        var p2_idx = i % pattern2.length;
        var p3_idx = i % pattern3.length;
        
        if(pattern1[p1_idx] === answers[i]){ result[0]++; }
        if(pattern2[p2_idx] === answers[i]){ result[1]++; }
        if(pattern3[p3_idx] === answers[i]){ result[2]++; }
    }
    
    var bestScored = 0;
    for(var i = 0 ; i < result.length ;i++){
        if(bestScored < result[i]){ 
            bestScored = result[i]; 
            answer = [i + 1];
        }
        else if(bestScored === result[i]){
            answer.push(i + 1);
        }
        
    }    
    
    return answer.sort((a,b) => a-b);
}