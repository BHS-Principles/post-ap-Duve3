var TEMP = document.getElementById("temp");
var TARGET = document.getElementById("target");

var CARD = TEMP.querySelector(".card");


class Game {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;

        this.turn = 0

        this.play();
    }

    notOver() {
        return this.turn++ < 5;
    }

    init() {
        // make this function attach a button to hit or stand & create each player
    }

    play() {
        // play the game!!
        // 1; shuffle the cards
        this.deck.shuffle();

        let win = false;

        let skipped = 0;
        while (!win) {
            skipped = 0;

            for (var i = 0; i < this.players.length; i++) {
                // TODO: implement hit mechanic, right now it automatically just goes up and up
                var p = this.players[i];

                // check if they have gone over 21
                var total = p.sum();

                if (total == 21) {
                    // the player has won, do not give them more cards or similar
                    skipped += 1;
                    continue;
                }
                
                // give a card to each players
                var nextCard = this.deck.pop();
                console.log(nextCard);
                console.log(this.players);
                console.log(p.sum());
                p.cards.push(nextCard)
                
                if ((total + nextCard.value) > 21) {
                    p.lost = true;

                    this.players.splice(i, 1);

                    console.log(`${p.name} LOST! (value: ${p.sum()})`)
                }
                
                
            }

            if (skipped == this.players.length) {
                win = true;
            }
        }

        console.log(`The players who won are: ${this.players}`);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.lost = false;
    }

    sum() {
        var t = 0
        for (var i = 0; i < this.cards.length; i++) {
            t += this.cards[i].value;
        }

        return t;
    }
}


class Deck {
    constructor(numOfCards) {
        this.cards = [];
        this.length = numOfCards;

        this.make();
    }

    make() {
        for (var i = 0; i < this.length; i++) {
            this.cards.push(new Card(i));
        }
    }

    shuffle() {
        for (var i = 0; i < this.length; i++) {
            var card1 = Math.floor(Math.random() * this.length);

            // swap these two cards
            var temp = this.cards[card1];
            this.cards[card1] = this.cards[i];
            this.cards[i] = temp;
        }   
    }

    pop() {
        return this.cards.pop();
    }
}


class Card {
    constructor(value) {
        this.id = value;
        this.suit = Math.floor(value/13);
        this.value = value % 13;

        this.pic = "card.svg"


        this.html = CARD.cloneNode(true);

        this.html.innerHTML = "silver: " + this.id;

        this.html.style.backgroundPositionX = -(this.value) + "00%";
        this.html.style.backgroundPositionY = (this.suit * 25) + "%";
        this.html.style.display = "inline-block";
    }

    draw(appendTo) {
        appendTo.append(this.html)
    }
}

new Game([new Player("a")], new Deck(52));
