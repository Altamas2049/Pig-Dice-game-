/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores,roundScore,activePlayer, gameplaying;
// scores=[0,0];
 //roundScore=0;
//activePlayer=0;

init();
/*document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
*/
 
//console.log(dice);


/*this is setter because we set the value in this line*/

//document.querySelector('#current-'+ activePlayer).textContent= dice;

/*In this code we use innerHTML which let the developer to change somthing related
to HTML,or simply we can write HTML code using this innerHTML. And innerHTML is the
property of DOM(Document Object MOdel)*/

//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+ dice +'</em>'


/*In this line of code we get the value which is already assign in the HTML and
we only read  or get the value by using the querySelector, here it works like a
getter.*/

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


/* In this code we use querrSelector to make a change in a Style or CSS. and use.*/

//document.querySelector('.dice').style.display='none';

/*we define a function which get called when we click on the button
 we created this function because in EventListner it require two
 arguments and we use button function which get called when we click 
 on that button.In this EventListner the button will called the callback 
 function because it get call by other function.
 
 Anonymous function are the function which doesnot have the name and which 
 cannot be reused. In this EventListner we directly define the Function
 as it's 2nd argumet.*/

/*function button(){
    //Do something here
}
button();
document.querySelector(".btn-roll").addEventListener('click',button);
*/

/*Anonymous Function*/
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gameplaying){
        //1. Random number.
        var dice=Math.floor(Math.random()*6)+1;
        document.querySelector('#current-'+ activePlayer).textContent= dice;

        //2.Display the result.
        var diceDOM =document.querySelector('.dice');
         diceDOM.style.display='flex';
        diceDOM.src='dice-'+ dice +'.png'

        //3.update the round score Only if the rolled number was Not a 1.

        if(dice!==1){
            //Add score
            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
        } else{
            //Next player
            nextplayer();
        
        }

    }
    
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gameplaying){

        //Add current score to Global score

    scores[activePlayer]+=roundScore;

    //Update te UI 
    
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    //check if player won the game
    if(scores[activePlayer]>=10){
        document.querySelector("#name-"+activePlayer).textContent="WiNNER yo!";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        gameplaying=false;
    }else{

         //Next player
         nextplayer();

    }
    
    }
    
});

function nextplayer(){

     //Next player
        activePlayer===0 ? activePlayer = 1 : activePlayer = 0;
        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
   
        document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gameplaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById("name-0").textContent="Player-1";
    document.getElementById("name-1").textContent="Player-2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}










