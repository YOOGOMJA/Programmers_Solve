function solution(array, commands) {
    var answer = [];
    
    for(var i = 0 ; i < commands.length; i++){
        if(commands[i][0] === commands[i][1]){ 
            answer.push(array[commands[i][0] -1]); 
        }
        else{
            var copied = array.slice(commands[i][0] - 1,(commands[i][1] - commands[i][0]) + 2);
            copied.sort((a,b) => a-b);
            answer.push(copied[commands[i][2] - 1]);
        }
    }
    
    return answer;
}