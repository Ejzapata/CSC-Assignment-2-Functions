/* Eleni Zapata*/

function playAGame()
{
/* These are my variables*/
    var random1 = Math.ceil(Math.random()*6);
    var random2 = Math.ceil(Math.random()*6);

    document.getElementById("rand1").innerHTML = "1st random num = " + random1;
    document.getElementById("rand2").innerHTML = "1st random num = " + random2;
   
    var sum = random1+random2;
/* These are my if, else if, and else*/
    if ((sum == 7) || (random2 < 5))
    {
        document.getElementById("result").innerHTML = "WINNA WINNA";
    }
  else if  ((sum = 4) && (random1 !=2))
    {
        document.getElementById("result").innerHTML = "LOSER";
    }
    else 
    {
        document.getElementById("result").innerHTML = "You tried!";
    }

}