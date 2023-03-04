var suits  = ['hearts', 'clubs', 'diamonds', 'spades'];
var values = [{face:'A', value: 1},{face: '2', value: 2},{face: '3', value:3},{face: '4', value: 4},
{face: '5', value: 5},{face: '6', value: 6},{face: '7', value: 7},{face: '8', value: 8},{face: '9', value: 9},
{face: '10', value: 10},{face: 'J', value: 11},{face: 'Q', value:12},{face: 'K', value:13}];

function newDeck(){
    let deck = [];

    for(i=0; i<suits.length; i++){
        for(x=0; x<values.length; x++){
            let card = {value: values[x], suit: suits[i]};
            deck.push(card)
        };
    };
    return deck;
};

var deck = newDeck();

function shuffle(deck){
    for(i=deck.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    };

    return deck;
};

shuffle(deck);

function newCard(){
    var card = deck.pop();
    return card;
}

var currentCard = newCard();
var dispCard = document.getElementById('card');
dispCard.innerHTML = currentCard.value.face + currentCard.suit;


var high = document.getElementById('high');
var low  = document.getElementById('low');

high.addEventListener('click', ()=>{
    nextCard = newCard();
    if(nextCard.value.value == currentCard.value.value){
        alert('same value')
    }else if(nextCard.value.value < currentCard.value.value){
        alert('loss')
    }else{
        alert('win')
    }
    currentCard = nextCard;
    dispCard.innerHTML = currentCard.value.face + currentCard.suit;
})

low.addEventListener('click', ()=>{
    nextCard = newCard();
    if(nextCard.value.value == currentCard.value.value){
        alert('same value')
    }else if(nextCard.value.value > currentCard.value.value){
        alert('loss')
    }else{
        alert('win')
    }
    currentCard = nextCard;
    dispCard.innerHTML = currentCard.value.face + currentCard.suit;
})