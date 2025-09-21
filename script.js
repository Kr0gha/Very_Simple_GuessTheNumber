var RandomNumber = Math.floor(Math.random() * 10) +1;
var Life = 3;


function modifyText(Text){
    document.getElementById('infoText').innerHTML = Text;
}

function PressEnter(event){
    // je recupere la valeur avec document.getElementById

    let Response = document.getElementById('Response').value
    if(event.key == 'Enter')
        EnterVerif(Response)
}


function EnterVerif(ResponseUser){

    if(!isNaN(ResponseUser)){
        VerifyNumber(ResponseUser,RandomNumber)
        console.log(RandomNumber)
    }
    else {
        console.log('Merci de founir un nombre entre 1 & 10');
    }
}

//Genere un nouveau nombre aleatoire 

function GenRandomNumber(){
    return RandomNumber = RandomNumber = Math.floor(Math.random() * 9) +1;
}
//------

//------

modifyText('Test');

function VerifyNumber(Value,RandomNumber){
    if(Value == 0) {
        modifyText('Vraiment ? tu a choisi 0 ? non c´est pas possible recommence')
    }
    else if(Value > RandomNumber && Life > 0){
        Life -= 1;
        modifyText('plus bas il vous reste ' + (Life +1) + ' Vie');
    }
    else if(Value < RandomNumber && Life > 0) {
        Life -= 1;
        modifyText('plus haut il vous reste ' + (Life +1)  + ' Vie')
    }
    else if(Value == RandomNumber && Life > 0)
    {
        modifyText('Bravo vous avez Gagner il vous rester ' + (Life +1)  + ' Vie, un nouveau Nombre va etre Generer')
        Life = 3;
        GenRandomNumber();
    }
    else {
        modifyText('Perdu un nouveau Nombre va etre generer et vos 3 Vie revienne')
        Life = 3;
        GenRandomNumber();
    }
}


