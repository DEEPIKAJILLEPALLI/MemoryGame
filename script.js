document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'chocolates',
            img: 'images/chocolates.png'
        },
        {
            name: 'chocolates',
            img: 'images/chocolates.png'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'minion',
            img: 'images/minion.png'
        },
        {
            name: 'minion',
            img: 'images/minion.png'
        },
        {
            name: 'hand',
            img: 'images/hand.png'
        },
        {
            name: 'hand',
            img: 'images/hand.png'
        },
        {
            name: 'wondersmile',
            img: 'images/wondersmile.png'
        },
        {
            name: 'wondersmile',
            img: 'images/wondersmile.png'
        }
    ]


    // creating Game board
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    function createGameBoard() {
        for (let ele = 0; ele < cardArray.length; ele++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blur.png')
            card.setAttribute('data-id', ele)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    function checkForMatch() {

        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blur.png')
            cards[optionTwoId].setAttribute('src', 'images/blur.png')
            //alert('sorry match not found ')
        }

        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) {
            location.reload();
            resultDisplay.textContent = 'congratulations...'

        }
    }
    function flipCard() {

        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 400)
        }
    }
    createGameBoard()
})
