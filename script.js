
class Scenario {
  constructor(description, threshold1, threshold2, threshold3, threshold4, threshold5) {
    this.description = description;
    this.threshold1 = threshold1;
    this.threshold2 = threshold2;
    this.threshold3 = threshold3;
    this.threshold4 = threshold4;
    this.threshold5 = threshold5;
  }
}

var scenarios = [];

var scenario = new Scenario(
  "You find yourself at a carnival! As you wait in line, a man in a top hat pulls you aside and whispers in your ear: “Step right up to the Wheel of Fun, spin it right and you might win some, spin it wrong and your blood will run…”"
  ,"The spinner lands on a small sliver of black. The man smiles as you sink into the ground, screams filling your ears from every direction. <i>Lose 2 points</i>"
  ,"The spinner lands on a blank section and the world begins to fade. When you wake up, you’re back in line where you started. <i>You get nothing</i>"
  ,"You win a prize! A big hug- as you feel the man’s embrace, you don’t feel lonely anymore <i>Earn 3 points</i>"
  ,"You win a prize! An icecream cone that starts screaming the moment you take a bite <i>Obtain item number 1</i>"
  ,"The spinner lands on an infinitely small sliver of gold leaf. The man disappears in an instant, leaving behind his top hat. As you put it on, your mind is flooded with the ancient secrets of the earth- things mankind has never known. <i>Earn 4 points and item number 2</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in small damp room. In front of you is a mysterious black door made of rotting wood. You grip the doorknob and begin to turn it."
  ,"The door opens wide and you come face to face with the emptiness of your own soul. Something in you prompts you to step forward. You will not emerge for many years. Lose 2 points "
  ,"Despite your best efforts, the door won’t budge. You get nothing"
  ,"The door opens and you find a small bathroom. A man is sitting on the toilet crying, but looks up when he hears you. He explains that he ran out of toilet paper 15 years ago, but the door never opened until now. You offer him some cloth, but quickly shut the door when he attempts to stand up and hug you. As you walk away, you hear him start to panic when he realizes the door is locked again. Earn 2 points"
  ,"You feel the door open from the other side. An old woman smiles knowingly and hands you a fully loaded handgun before closing it again. Obtain item number 3"
  ,"The door opens to a crowd of thousands chanting your name. A royal attendant approaches you and informs you that you are their long awaited king. You accept your kingship and the crowd erupts in tumultuous applause. Earn points and item number 4"
);
scenarios.push(scenario);

var random;

function newScenario() {
  // Get a random number
  random = Math.floor(Math.random() * scenarios.length);

  // Display the text of that random number
  document.getElementById("scenario").innerHTML = scenarios[random].description;
  document.getElementById("thresholds").style.display = "flex";
  document.getElementById("enterNumber").style.display = "block";
  document.getElementById("outcome").innerHTML = "";
}


function outcome(threshold) {
  var number = document.getElementById("roll").value;
  console.log(number);
  if(threshold.value == "bust") {
    document.getElementById("outcome").innerHTML = scenarios[random].threshold1;
  }
  else {
     if (number >= 1 && number <= 6) {
       document.getElementById("outcome").innerHTML = scenarios[random].threshold2;
     }
     else if (number >= 7 && number <= 11)
     {
       document.getElementById("outcome").innerHTML = scenarios[random].threshold3;
     }
     else if (number >= 12 && number<= 15) {
       document.getElementById("outcome").innerHTML = scenarios[random].threshold4;
     }
     else if (number >= 16) {
       document.getElementById("outcome").innerHTML = scenarios[random].threshold5;
     }
  }
  /*
  else if(threshold.value == "fail") {
    document.getElementById("outcome").innerHTML = scenarios[random].threshold2;
  }
  else if(threshold.value == "average") {
    document.getElementById("outcome").innerHTML = scenarios[random].threshold3;
  }
  else if(threshold.value == "win") {
    document.getElementById("outcome").innerHTML = scenarios[random].threshold4;
  }
  else if(threshold.value == "epic") {
    document.getElementById("outcome").innerHTML = scenarios[random].threshold5;
  }
  */
}
