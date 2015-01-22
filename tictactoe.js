var player1Name="" , player2Name="", turn = "";
var spaces= [0,0,0,0,0,0,0,0,0]
var hasWinner = 0, moveCount=0;

function boardMsg(x){
    return $("#board").text(x);
}

function setTurn(){
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner=0;
    if(r==1){
        turn = player1Name;
        boardMsg(player1Name+"'s turn now! (O's)");
    }
    else{
        turn = player2Name;
        boardMsg(player2Name+"'s turn now! (X's)");
    }
}



function init(){
        turn = "";
        spaces= [0,0,0,0,0,0,0,0,0];
        boardMsg("");
       	$(".board").html("");
        hasWinner = 0;
        moveCount=0;
		var player1=document.getElementById('player-1-inp').value;
		var player2=document.getElementById('player-2-inp').value;
		player1Name=("");
		player2Name=("");
		
}


function playTTT(){

    if(hasWinner==1){
        init();
    }

    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }
	else if(player1Name==player2Name){
		alert("Player names must be unique.");
		return;
	}
    setTurn();
};


function addMove(x){

if(player1Name=="" || player2Name=="")
{alert('Please set all players name and click Play.');
}
else
{
if (spaces[x]!=0)
	{
	alert('This space has already been selected.');
	return;
	}
if (turn==player1Name)
   spaces[x]=1;
else
	spaces[x]=2;
	
var boardLocation=('t'+x);
var editHTML= document.getElementById(boardLocation);

	
    if(hasWinner==1){
        alert("Please click New Game to play again.");
        return;
    }

	if(spaces[x]!=0)
	{
    if(turn==player1Name){
        moveCount++;
		editHTML.innerHTML=('O');
		console.log(moveCount + ' 1');
            if(moveCount>=9){
				var winner = checkWin();
				console.log(winner);
				if(winner==true)
				{
					return;
				}
				else{
                boardMsg("Match Drawn!");
                moveCount=0;
                hasWinner=1;
                return;
				}
            }else{
                turn = player2Name;
                boardMsg(player2Name+"'s turn now! (X's)");				
				var winner = checkWin();
				console.log(winner);
            }
            return;  
     } 
    else if(turn==player2Name){
        moveCount++;
		editHTML.innerHTML=('X');
		console.log(moveCount + ' 2');
            if(moveCount>=9){
				var winner = checkWin();
				console.log(winner);
				if (winner==true)
				{
				return;
				}
				else
				{
                boardMsg("Match Drawn!");
                moveCount=0;
                hasWinner=1;
                return;
				
				}
            }else{
                turn = player1Name;
                boardMsg(player1Name+"'s turn now! (O's)");				
				var winner = checkWin();
				console.log(winner);
            }
            return;  
     }   
    else{
          return;
        } 	
    }
	else
	{
	alert('This space has already been taken.');
	}
}
};
	
	
function checkWin()
{
  /* var wins=[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] */
  var a = spaces[0].toString() + spaces[1].toString() + spaces[2].toString();
  var b = spaces[3].toString() + spaces[4].toString() + spaces[5].toString();
  var c = spaces[6].toString() + spaces[7].toString() + spaces[8].toString();
  var d = spaces[0].toString() + spaces[3].toString() + spaces[6].toString();
  var e = spaces[1].toString() + spaces[4].toString() + spaces[7].toString();
  var f = spaces[2].toString() + spaces[5].toString() + spaces[8].toString();
  var g = spaces[0].toString() + spaces[4].toString() + spaces[8].toString();
  var h = spaces[6].toString() + spaces[4].toString() + spaces[2].toString();
 
  if (a==111 || b==111 || c==111 || d==111 || e==111 || f==111 || g==111 || h==111)
  {
	alert(player1Name + ' wins!');
	init();
	return true;
	}
  else if (a==222 || b==222 || c==222 || d==222 || e==222 || f==222 || g==222 || h==222)
  {  
	alert(player2Name + ' wins!');
	init();
	return true;
	}
   else 
   return false;
}

$(function(){
  $("#FAQ").DataTable();
});




function validateEmail(){

var email = document.getElementById("email").value;	
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");

console.log(email);
	if (email == null || email == "") {
        alert("Email must be filled out");
		return false;
		}
	else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
		}
	else 
		return;
}

