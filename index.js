let player = {
    name: "Pera",
    chips: 145,    
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

//vraca random izmedju 1 i 13 , sme samo tolliko u blackjack , ace je 1 jack 11 queen 12 king 13
//ace moze biti 11 a 11-13 moze biti 10
function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 10
    }
    else {
        return random
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "you GOT BLACKJACK"
        hasBlackJack = true
    }
    else {
        message = "you lost"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        //    console.log(cards)
        renderGame()
    }

}