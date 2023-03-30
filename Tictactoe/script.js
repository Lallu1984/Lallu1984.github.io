// globaalsed muutujad. Peab olema eespool, et oleks alati kättesaadav kõikidele funktsioonidele. Ei ole teiste funktsioonide sees.
var player = "X";
var boxes = document.getElementsByClassName("box");  // Loon muutuja kastid(boxes) ja kutsun välja klassinimega("box"). Saan kõtte kõik ruudud. Tagastatakse massiivina(array). 
var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Muutju mängulaud, kus saame mängulaua salvestada ja uuendada. Sees tühjad stringid

function mouseMotion(ref,motion){
    if(motion == 'over')
        {
            ref.style.borderColor='#E00';
        }
        else if(motion == 'out')
        {
            ref.style.borderColor='#CCC';
        }
    }

function add1(pos) { // ruudule clikides käivitab funktsiooni onclick id-ga add1.  (pos) seotud HTML onclick funktsiooniga
    if (gameBoard[pos].length == 0) { // Kui mängulaua valitud positsioon on tühi(length==0, ühtegi ühikut ei ole)
        boxes[pos].innerHTML = player; // ruudu valitud positsiooni sisu asendame mängijaga
        gameBoard[pos] = player;  // mängulaua valitud positsioon uuendame mängijaga
        CheckWinner();  // Siin käivita funktsioon CheckWinner(siin otsi võitjat) Peab olema enne küsimust kas x või 0 mängija muutub
        if(player == "X") {  // Küsimus: kui mängija on võrdne x-ga
          //  boxes[pos].classList.add("boxX");  kui on x siis ruudu positsioonil anname talle classlistiga teise stiili css-s
            player = "0"; // on võrdne x-ga ja asendab 0-ga
        } else { // kui ei ole x
            player = "X"; // siis mängija on uuesti x
         //  boxes[pos].classList.add("box0");  kui on 0 siis ruudu positsioonil anname talle classlistiga teise stiili css-is

    }
        
    document.getElementById("player").innerHTML = player; // Muudame mängija siin kas x-ks või 0ks
    }
}


function CheckWinner() {   // funktsioon kontrollib kas keegi on võitnud
    if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && gameBoard[0] != "") {  // kui mängulaua(ML) pos 0 on võrdne ML pos 1ga ja ML pos 0 on võrdne ML pos 2 ga ja ML pos 0 (!=)ei võrdu tühjusega
        WinnerIs(player, 0, 1, 2); // siis on Võitja mängija ja positsioonid taustavärvi jaoks
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] && gameBoard[3] != "") {
        WinnerIs(player, 3, 4, 5);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6] != "") {
        WinnerIs(player, 6, 7, 8);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] && gameBoard[0] != "") {
        WinnerIs(player, 0, 3, 6);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] && gameBoard[1] != "") {
        WinnerIs(player, 1, 4, 7);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8] && gameBoard[2] != "") {
        WinnerIs(player, 2, 5, 8);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] && gameBoard[0] != "") {
        WinnerIs(player, 0, 4, 8);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6] && gameBoard[2] != "") {
        WinnerIs(player, 2, 4, 6);
        document.getElementById('WinnerIs').style.display = 'block';
    } else if(gameBoard.indexOf("") == -1) { // kas mängulaud on täis. Otsi kindlat String meie Array-st ja tagasta selle asukoht. indexof otsib array-st antud juhul tühjust. gameboard ==-1 tähendab et kogu laud on täidetud
        NoWinner(); // kutume funktsiooni kui ei ole võitjat
    } 
}


function WinnerIs(winner, pos1, pos2, pos3) { // funktsioon võitja on (võitja positsioonid 1, 2, 3)
    document.getElementById("winner").innerHTML = "VÕITJA ON: " + winner; 
    document.getElementById("winnerDiv").style.display = "block"; 
    boxes[pos1].classList.add("gameOver"); // kasti positsioonil anname talle  uue style taustavärvi
    boxes[pos2].classList.add("gameOver");
    boxes[pos3].classList.add("gameOver");
    
}
    

function NoWinner() {
    document.getElementById("winner").innerHTML = "JÄITE VIIKI!!!";
    document.getElementById("winnerDiv").style.display = "block";
}

function startNewGame(){
    location.reload(true);
}