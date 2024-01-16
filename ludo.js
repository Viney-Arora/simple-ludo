// alert('hello Viney')
let player_turn1 = document.querySelector('.player_turn1');
let player_turn2 = document.querySelector('.player_turn2');
let roll_btn = document.querySelector('.roll_btn');
let player1Score = document.querySelector('.player1Score');
let player2Score = document.querySelector('.player2Score');
const randomNum = document.querySelector('.dicescore')
let card1 = document.querySelector('.one')
let card2 = document.querySelector('.two')
const diceimg = document.querySelector('.dice-six')


// console.log(player1Score)
// console.log(player2Score==player1Score)
let i = 1;

roll_btn.addEventListener('click', random_num);



let min = 1;
let max = 7;

function random_num() {
    // if (i < 6) {

    card1.classList.toggle('shadow1')
    card2.classList.toggle('shadow1')
    player_turn1.classList.toggle('hidden')
    player_turn2.classList.toggle('hidden')

    console.log('Random number')
    let Num = (Math.floor(Math.random() * (max - min) + min));

    randomNum.innerHTML = Num;

    score_divide(Num);
    console.log(Num)

    diceimg.classList.add('six')
    diceimg.src = `images/dice-${Num}.png`
    setTimeout(() => {   // setTimeout delay function hain predefined web api.
        diceimg.classList.remove('six')
        console.log('vijay')
    }
        , 1000);

}
// else {
//     alert('Game is Over Bro!');
// }








function score_divide(Num) {

    if (i == 40) {
        finish();
        alert('Game is Over');
        restart();
    } else {
        if (i % 2 == 0) {

            // player1content = parseInt(player1Score.textContent)
            // player2content = parseInt(player2Score.textContent)
            player2Score.innerHTML = parseInt(player2Score.textContent) + Num;

        }
        else {
            // diceimg.classList.add('dice-six')

            // player1content = parseInt(player1Score.textContent)
            // player2content = parseInt(player2Score.textContent)
            player1Score.innerHTML = parseInt(player1Score.textContent) + Num;


        }
        i++
    }

}

function finish() {



    // console.log(player1)
    // console.log(player2)
    player1content = parseInt(player1Score.textContent)
    player2content = parseInt(player2Score.textContent)
    if (player1content > player2content) {
        alert('Player 1 won the game')
        player1Score.innerHTML = 0;
        player2Score.innerHTML = 0;
        // random_num();


    }

    else if (player1content == player2content) {
        alert("Match tie");

        // random_num();
    }
    else {
        alert('Player 2 won the Game')
        player1Score.innerHTML = 0;
        player2Score.innerHTML = 0;
        // random_num();


    }
}

function restart() {
    location.reload();
}