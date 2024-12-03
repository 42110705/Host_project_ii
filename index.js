let guess=Math.floor((Math.random()*100)+1)
console.log(guess)
let count=0
let game_status = 1;
function Check(){
    let hints = document.getElementById('hint');
    let attempt=document.getElementById('attempt')
   
    if(game_status == 1){
        let val=document.forms[0]['val'].value
        count++

        if(val== guess){
            hints.innerHTML = ' Guess is Correct!';
            
            document.getElementById('check').innerHTML = 'Reset';
            game_status=0;
        }
        else if(val<guess){
            hints.innerHTML = 'Guess is Lower.';
            
        }
        else{
            hints.innerHTML = 'Guess is Higher.';
            
        }
        attempt.innerHTML = 'Attempts: '+count;
    }   
    else{
        reset();
        game_status=1
    }
}
function reset(){ 
    document.getElementById('check').innerHTML = 'Change';
    count = 0;
    attempt.innerHTML = 'Attempts: '+count;
    document.getElementById('hint').innerHTML = 'Game reset! Start guessing.';


}  





