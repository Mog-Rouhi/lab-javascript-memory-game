class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) return undefined;
    for (let i = this.cards.length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[j];
      this.cards[j] = this.cards[i - 1];
      this.cards[i - 1] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;      
      return true;
    } else{
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed >= 8){
      return true;
    }
    else{
      return false;
    }
  }
}



