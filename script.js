
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
  "You find yourself at a carnival! As you wait in line, a man in a top hat pulls you aside and whispers in your ear: “Step right up to the Wheel of Fun! Spin it right and you might win some, spin it wrong and your blood will run…”"
  ,"The spinner lands on a small sliver of black. The man smiles as you sink into the ground, screams filling your ears from every direction. <i>Lose 2 points</i>"
  ,"The spinner lands on a blank section and the world begins to fade. When you wake up, you’re back in line where you started. <i>You get nothing</i>"
  ,"You win a prize! A big hug- as you feel the man’s embrace, you don’t feel lonely anymore <i>Earn 3 points</i>"
  ,"You win a prize! An icecream cone that starts screaming the moment you take a bite <i>Obtain item number 1</i>"
  ,"The spinner lands on an infinitely small sliver of gold leaf. The man disappears in an instant, leaving behind his top hat. As you put it on, your mind is flooded with the ancient secrets of the earth- things mankind has never known. <i>Earn 4 points and item number 2</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in small damp room. In front of you is a mysterious black door made of rotting wood. You grip the doorknob and begin to turn it."
  ,"The door opens wide and you come face to face with the emptiness of your own soul. Something in you prompts you to step forward. You will not emerge for many years. <i>Lose 2 points</i>"
  ,"Despite your best efforts, the door won’t budge. <i>You get nothing</i>"
  ,"The door opens and you find a small bathroom. A man is sitting on the toilet crying, but looks up when he hears you. He explains that he ran out of toilet paper 15 years ago, but the door never opened until now. You offer him some cloth, but quickly shut the door when he attempts to stand up and hug you. As you walk away, you hear him start to panic when he realizes the door is locked again. <i>Earn 2 points</i>"
  ,"You feel the door open from the other side. An old woman smiles knowingly and hands you a fully loaded handgun before closing it again. <i>Obtain item number 3</i>"
  ,"The door opens to a crowd of thousands chanting your name. A royal attendant approaches you and informs you that you are their long awaited king. You accept your kingship and the crowd erupts in tumultuous applause. <i>Earn points and item number 4</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in a field surrounded by beautiful little butterflies flitting left and right."
  ,"You hear a dripping sound and look down as your hand begins to erode. The poisonous butterflies envelop you and consume what’s left of your fingers. <i>Lose 2 points</i>"
  ,"he beauty of the butterflies inspires you to follow your heart… right into the Forest of No Return, where you spend the next 5 weeks surviving on boiled urine and tree grubs. <i>Lose 1 point</i>"
  ,"A voice calls to you from across the field. You run towards it and find a butterfly prophet that warns you to flee the coming wrath of the insects upon mankind. You take his advice very seriously. <i>Earn 2 points</i>"
  ,"You begin shoving your pockets full of them. Butterfly pie is a delicacy in every known universe. <i>Obtain item number 5</i>"
  ,"A strange feeling comes over you. You shed your clothes and wings emerge from your back. All at once, you are flying. As the warm breeze kisses your naked skin, you realize this is where you have always belonged- among the majestic herd. <i>Earn 5 points & item number 6</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in a dark and dreary wasteland devoid of life when you’re suddenly ambushed by a group of orcs."
  ,"You try to cast a spell to conjure a magical weapon but you screw it up, and instead find a wooden sword in your hand. The sword looks up and smiles you at you, but before you can process this, it begins brutally beating you and stabbing at your chest. <i>Obtain item 7</i>"
  ,"You attempt to conjure a weapon but your mind wanders, instead conjuring your high school crush. The Orcs are overcome with feelings they’ve never had before, and as they begin to process what love really means, you run away. <i>You get nothing</i>"
  ,"You use a spell to make the orcs forget their hostility and instead begin a meaningful relationship with you. You play a few games of blackjack together, but don’t end up with much. <i>Earn 2 points</i>"
  ,"You conjure a sword from thin air and slay the orcs with ease. While looting the bodies you find a gold ring with strange script written on the inside band. It’s obviously not worth very much, but the local pawn shop owner happily pays double your asking price. What a sucker. <i>Earn 3 points</i>"
  ,"You decide to capitalize on the situation and begin explaining the wonderful benefits of VitaBoost to the orcs, convincing them they can be millionaires just by sharing the product with their friends and family. Soon, all of Mordor is living healthy, active lifestyles, and you plan on expanding in the coming months to create a strong market presence in the Shire as well. <i>Your opponents are sold on the VitaBoost Trend, take 3 points from the player of your choice. Then, if there’s more than 2 players, they choose to take 2 points from another player, and that player takes 1 point from another player.</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You are standing on top of a snow covered roof and see a fat man in a red suit entering the chimney."
  ,"You don’t believe in Santa and assume the man is a robber. Trying to be the hero, you pursue him down the chimney and kill him. It was Santa. You just ruined Christmas for everyone. <i>Lose 2 points</i>"
  ,"Santa climbs out of the chimney, and you ask if he has a present for you. Santa smiles and says “You’ve been very naughty this year” as he pushes you off the roof. <i>You get nothing</i>"
  ,"You sneak up to his sleigh and take some presents. You nab some good gifts but feel bad for ruining some kid’s Christmas. <i>Obtain item 11 but lose 2 points</i>"
  ,"You eagerly await Santa to come back out on the roof.  But when the man climbs out of the chimney, you realize it’s just old man Jenkins living out one of his delusions again. You drive him back to the sanitarium and turn him in. It’s a thankless task, but somebody has to do it. <i>Earn 4 points</i>"
  ,"You bribe the reindeer and hijack Santa’s sleigh, flying into the winter night. This year, it’s you that brings joy to children all around the world. <i>Earn 4 points and item 11</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in a dark cell surrounded by rats. You hear a voice from the corner say, “It’s too dangerous to go alone, take this.”"
  ,"The old man tries to hand you a sword, but slips and stabs you with it. You scream in agony and the man begins to sob. <i>Lose 2 points</i>"
  ,"The old man hands you a large rat and smiles. You smile back out of pity. <i>You get nothing</i>"
  ,"The old man hands you a small green outfit seemingly designed for a child. You cannot possibly fit, but he won’t stop staring until you try it on. <i>Earn 2 points</i>"
  ,"The old man hands you a small wooden sword. You have no idea where he thinks you’re going, seeing as you’re both currently trapped in a cell, but it’s the thought that counts. <i>Obtain item 12</i>"
  ,"You scoff at the old man and roll into the corner, executing a perfect frame jump roll infinite sword glitch that teleports you to the final boss in an instant. <i>Earn 4 points and item 12</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "Before you sits a large red button on a pedestal"
  ,"You eagerly mash the red button repeatedly, because that’s just the kind of person you are, but by the time you realize that every button press is deleting a part of your body it’s far too late. You try to scream but realize there is nothing left of you. <i>Lose 2 points</i>"
  ,"You push the button and it makes a fart noise. You amuse yourself for a few hours, but eventually it loses its charm. <i>You get nothing</i>"
  ,"You push the button and 35 cents comes out of a change dispenser you didn’t notice before. You wait a few seconds and a receipt begins to print out of a small slit below it. <i>Earn 2 points</i>"
  ,"You push the button and hear a loud voice cheering you on. You press it again and a few seconds of clapping plays. You press it one more time and a voice reminds you that you can do anything you set your mind to. After a couple hours you leave the room with better self-esteem than you’ve ever had. You needed this. <i>Earn 4 points</i>"
  ,"You push the button and suddenly the room fills with applause as an announcer’s voice booms overhead, “Conggggrratttulllations, Cindy, show him what he’s won!” Confetti floods the room and a small pedestal rises from the ground. When it stops, a spotlight cuts on and you find a small action figure that looks exactly like you. The detailing is some of the best you’ve ever seen. You will cherish this forever. <i>Earn 4 points and item number 13</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in a kitchen surrounded by cameras. “Welcome chef. Your challenge here today is chicken cordon bleu. You have 15 minutes starting….. now.”"
  ,"You don’t have much cooking experience but you give it your best shot. Your final dish looks atrocious.  “This chicken is so F*@#ing raw that a skilled a vet could still save it!” You are kicked off the show and cast into the depths of Hell. <i>Lose 2 points</i>"
  ,"You boast about your exquisite taste in food, but your dish makes it pretty clear you probably just eat cereal for every meal. <i>You get nothing</i>"
  ,"You don’t cook a very good dish but you get in a heated debate with the other chefs. The viewers love the drama. <i>Earn 3 points</i>"
  ,"You make sure to add your secret ingredient- love, and end up making an incredibly tasty dish that blows the chef away. You score the points that lead blue team to victory. <i>Earn 4 points</i>"
  ,"Using your wizard powers you obtain a special promotional sauce from another dimension and add it to your dish. The sauce is so good that the chef becomes utterly lost in it, melting into a puddle before your very eyes. You keep his knife as a souvenir. <i>Earn 4 points and take an item number 14</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in a consumer electronics retail store. It’s Black Friday."
  ,"You try to enter the store but are trampled by a crowd of eager shoppers. Your body hurts, but the real pain is missing out on all the sweet deals. <i>Lose one random item or if you don’t have an item lose 2 points</i>"
  ,"You failed to join the caravan of tent settlers two days prior. By the time you get there, all the deals have been claimed. <i>You get nothing</i>"
  ,"You try to fight the other shoppers for the best deals but you were always the weak one, weren’t you? You survive like you always have, by picking the bones clean for scraps. Enjoy that discounted printer ink, you failure. <i>Earn 2 points</i>"
  ,"You got the hot new video game console on everyone’s holiday wish list. You list it on eBay and make three times what it’s worth. You are the king of supply and demand. <i>Earn 4 points</i>"
  ,"Not only did you get the best deal on a new TV, but you’ve been saving a rare coupon that makes the deal so good, they’re actually paying you to take the TV. You have successfully exploited capitalism. <i>Earn 4 points and item number 15</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself face to face with a large, angry dragon"
  ,"The dragon thinks you are her baby, and takes you to your new life in her nest. You scream as she begins to fill your mouth with large raw meats until you are vomiting profusely. The meat doesn’t stop. <i>Lose 2 points</i>"
  ,"You try to talk your way out of this, but the dragon interrupts you to take a bite of your left leg. You have made a terrible mistake. <i>Lose 1 point</i>"
  ,"You vow to honor the dragon and restore balance to the world by performing the ancient dragon dance of your ancestors. The dragon feels incredibly respected and lets you pass through her territory unharmed. <i>Earn 3 points</i>"
  ,"You realize the angry dragon is not angry at you, but rather at the systematic oppression of low-income females by the heteronormative patriarchy. You become angry alongside her and together you start a small grassroots movement that seeks lasting change at the district and state levels. <i>Earn 4 points</i>"
  ,"You see through her rough, scaly exterior and find in her a heart burning with fiery passion. You don’t care what other people say, she’s more than enough woman for you. Through your continual advances you win her over and the two of you start a life together. Your dragon-kin babies are just the cutest. <i>Earn 4 points and item number 16</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself backstage. Someone pokes their head through the door. “Hey you’re up next!”"
  ,"You walk on stage and see a crowd of hundreds of people. You are petrified with fear. The unappeased crowd starts booing intensely. You always knew you were worthless. This is the most embarrassing moment of your entire life. <i>Lose 2 points</i>"
  ,"You decide to try your hand at stand up comedy, but the crowd turns on you when they realize how boring you are. Laughter only breaks out when people begin taking turns making fun of you. <i>You get nothing</i>"
  ,"You’ve been waiting for this moment. You proudly read from your poetry journal that you’ve been writing in for years. The crowd thinks your poetry’s pretty good, but not as good as that one slam poetry guy. You get second place. <i>Earn 2 points</i>"
  ,"Using your wizard powers you entertain the crowd with a magic show unlike any they’ve ever seen. Disappearing birds, playing card tricks, summoning the souls of the damned- the whole nine yards. You win the talent competition in a landslide. <i>Earn 4 points</i>"
  ,"You walk on stage and conjure an electric guitar. The crowd is stunned as you shred so hard that you literally tear the roof off. The performance that night propels you to international stardom. <i>Earn 4 points and item 17</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You enter a mysterious room filled with smoke and lights. 80’s guitar riffs play on a loudspeaker. In the far corner, there’s a man with a long mullet smoking a cigarette. He beckons you over and when you reach him, he whispers, “Rock paper scissors. If you lose, I take your soul.”"
  ,"You realize the mysterious man is actually one of the other wizards in disguise. <i>Choose any opponent and play 3 rounds of rock, paper, scissors. If they win, you must give them 2 points</i>"
  ,"“Rock. Paper. Scissors. Shoot!” You try the old middle school joke and make your fingers into a gun. The man is not amused and demands that you stop this childish behavior. <i>You get nothing</i>"
  ,"You refuse to play such a childish game and instead work out a trade. You give him your expendable left kidney in exchange for a small magical item. <i>Lose 2 points and gain item #</i>"
  ,"The man thinks you chose rock, but you were just balling up a fist so you could punch him in the face as hard as you can. You knock him out and steal all of his stuff. <i>Gain item #</i>"
  ,"When you notice the man is trying to cheat, you grab his knife and cuts off all his fingers. Now, he can only choose paper. Your perfect information strategy guarantees your win. <i>Gain 4 points and item #</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself at a college frat party. It’s the biggest party of the year and everyone is watching as you play the championship game of beer pong."
  ,"10 beers later, you pass out on the table mid-shot and ruin the whole game. You wake up with dicks drawn all over your face… but the real consequences of that night won’t manifest in your life until a few months later when your wife leaves you. In your lonely nights, you think of that night and turn to alcohol to numb the pain. You find your loved ones harder and harder to reach. Your daughter never calls anymore. Life was so much simpler back then- what happened to you? Will you ever escape this destructive pattern of self-harm? Life’s too short for questions like that, you say as you sip another glass of whiskey and watch your whole world burn. <i>Lose 2 points</i>"
  ,"You confidently toss the ball and loudly shout, “Money.” Your shot widely misses every cup, and now everyone knows you’re a tool. <i>You get nothing</i>"
  ,"You make the shot but it’s the middle cup (AKA the bitch cup). At least it’s better than not getting any cups. <i>Earn 3 points</i>"
  ,"You play your way to the last cup and in an intense shootout, narrowly defeat the president of Theta Apple Pi, instantly becoming the coolest person at the party. <i>Earn 5 points</i>"
  ,"You never miss a cup and win the game with a shot off the wall and your eyes closed. You are hailed as the greatest beer pong player of all time. <i>Earn 4 points and item number 18</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You see Adolf Hitler backstage before a speech. There are no bodyguards around him; he is alone."
  ,"You walk up to Hitler and attempt to convince him to change his ways. He doesn’t know what you’re referring to so you explain the holocaust. He thinks it’s a great idea. The holocaust is actually all your fault. <i>Lose 2 points</i>"
  ,"You know you could kill Hitler, but you think the repercussions of changing history are too risky. You walk away and spend the rest of your miserable existence wondering if you made the right choice. <i>You get nothing</i>"
  ,"You approach Hitler and tell him you’re a big fan of his art. Hitler is astonished that someone finally appreciates his talent. Because of your inspiring words, Hitler becomes a renown German artist- painting scenes of mass genocide instead of enacting them. I guess that’s still a win? <i>Earn 2 points</i>"
  ,"You tackle Hitler from behind, loudly singing The Star Spangled Banner as he writhes in your grasp. You eventually wrestle him to the floor where you proceed to yank out your American flag and suffocate him in liberty. Mission accomplished. <i>Earn 4 points</i>"
  ,"You begin to whisper the pledge of allegiance under your breath and pull out your trusty 9 millimeter. On your cue, your bald eagle bursts out of your backpack and flies into the face of the unsuspecting Nazi leader. As he curses and bats at his face in defense, you load a bullet in the chamber and aim for the head, just like you were taught. You hear the sound of an all-children choir singing the National Anthem in your head as you pull the trigger. It’s a great day to be an American citizen. <i>Earn 5 points and item 19</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself on some sort of mysterious alien spacecraft. You find the nearest door and enter a room full of strange eggs."
  ,"You choose to investigate an egg, but as soon as you touch it something jumps out and latches onto your face. It eventually falls off, but you don’t feel so hot… <i>Lose 1 point now and 1 point every turn until you role a 6 with any of your dice</i>"
  ,"You briefly entertain the thought of breaking open one of the eggs. A small part of you really wants to know if there’s alien chickens in there, and if so, what do they taste like? You eventually come to your senses and decide against it. <i>You get nothing</i>"
  ,"You whip out your flamethrower, find a metal surface, and decide to make an omelette with the large glowing eggs. Sure, the guttural screams you heard as you cooked them may be cause for concern, but right now, all you can think about is just how tasty they’d be with a little alien sausage. <i>Earn 3 points</i>"
  ,"You carefully take samples of the eggs and return to your lab to analyze them. After weeks of studying their unique properties, you finally figure out how to use them to genetically engineer your very own alien warrior... but more importantly, your very own best friend. <i>Draw item number 20</i>"
  ,"You arrive just in time to witness the mass hatching of a long-headed alien species. Because you are the first thing they see, you become the matriarch of an entire race- commanding your horde of slimy children across the galaxy, doing as you see fit. <i>Earn 4 points and item number 21</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself on a small rock being circled by a massive shark."
  ,"You slip and fall into the water, where the hungry shark eagerly takes a bite of your leg. The blood draws other sharks to join in. Soon, hundreds of sharks are taking turns eating pieces of your flesh. You narrowly avoid death, but you’ll be maimed for life. <i>Lose 2 points</i>"
  ,"You stare at the shark. The shark stares back. You stare harder. So does the shark. The battle goes on for hours, but you emerge victorious. The shark swims away in shame, but you’re still trapped in the middle of the ocean for the rest of your life. <i>You get nothing</i>"
  ,"You kick the shark in the face and scare it away. <i>Earn 2 points</i>"
  ,"As the shark jumps on the island to try and eat you, you suddenly remember that one movie and frantically shove an air tank into its mouth, making the shark temporarily retreat. As it pulls around for another attack, you pull out a gun and take aim. Just before the shark reaches you, you fire at the tank, and the shark explodes into gruesome chunks. Dinner is served. <i>Earn 5 points</i>"
  ,"You jump on the shark. It tries to hurl you off, but you hold on with all your might. Finally, the shark submits to your will. You are now a wizard riding a shark. <i>Earn 5 points and item 22</i>"
);
scenarios.push(scenario);

scenario = new Scenario(
  "You find yourself in the middle of a sandy colosseum with a metal dome overhead. All around you is a throng of spectators screaming for your blood."
  ,"You hear the sound of metal grating and suddenly, a large mutant on a platform rises up in the middle of the arena. The mutant’s body is covered in far too many hands. You hear the crowd shouting, “Handyman Steve! Handyman Steve!” Handyman Steve glares at you and all of his middle fingers gesture simultaneously. <i>Every player can bet up to 3 points that you will win or lose, roll a die, if the result is 1-3 you lose, if it’s 4-6 you win</i>"
  ,"You hear the sound of metal grating and suddenly, a large mutant on a platform rises up in the middle of the arena. The mutant’s left hand is incredibly tiny. You hear the voice of an announcer explain that the victory will go to the contestant with the tiniest body part. You look down at your pants, but decide your pride is not worth the win. The crowd goes wild as Tiny Hand Tina is declared the champion. <i>You get nothing</i>"
  ,"You hear the sound of metal grating and suddenly, a small puppy on a platform rises up in the middle of the arena. You are relieved that you caught such a big break- what an easy fight. You kill the puppy with no effort at all and congratulate yourself for being such a winner. <i>Gain 4 points… but lose 2 points</i>"
  ,"You hear the sound of metal grating and suddenly, a large mutant on a platform rises up in the middle of the arena. The mutant curses and screams at you, but you deflect his insults by yelling compliments back even louder. The mutant finally grows quiet and begins to tear up. You approach him as if to console him, but instead whisper “You are worthless” in his ear, breaking him beyond repair. <i>Gain 5 points</i>"
  ,"You hear the sound of metal grating and suddenly, a large mutant on a platform rises up in the middle of the arena. The mutant has several extra organs and limbs growing out of various places on his body and using precision logic, you convince him he is better off living life as your personal organ farm. He grows audibly excited at the prospect and offers a kidney on the spot. You refuse, but assure him the time will come. <i>Gain 5 points and item 23</i>"
);
scenarios.push(scenario);

var random;

function newScenario() {

  // refresh the page if all scenarios have been seen
  if(scenarios.length == 0) {
    location.reload();
  }

  // Get a random number
  random = Math.floor(Math.random() * scenarios.length);

  // Display the text of that random number
  document.getElementById("scenario").innerHTML = scenarios[random].description;
  document.getElementById("thresholds").style.display = "flex";
  document.getElementById("enterNumber").style.display = "block";
  document.getElementById("outcome").innerHTML = "";

  // Remove that scenario
  scenarios.splice(random, 1);
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
