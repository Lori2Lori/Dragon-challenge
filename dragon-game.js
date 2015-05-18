var user = prompt("Do you want to talk to a dragon or fight him? Choose TALK, FIGHT or RUN").toUpperCase();
switch(user) {
    case 'TALK':
        var name = "Deareyghthn"
        var answer = prompt("Welcome to my kingdom! - says dragon - My name is Deareyghthn, could you repeat it?").toUpperCase();
        if (answer === name.toUpperCase() || answer === "YES") {
            console.log("Very well, I'm impressed");
        } else {
            console.log("This is not correct, I will eat you, hahaha - You were eaten by the dragon");
        }
        break;
    case 'FIGHT':
        var answer1 = prompt("Are you fast?Yes or no?").toUpperCase();
        var answer2 = prompt("Are you smart? Yes or no?").toUpperCase();
        if (answer1 === "YES" && answer2 === "YES" ) {
            console.log("You can try to fight the dragon but he is much stronger");
        } else {
        console.log("Dragon drag you with the speed of light and strangled to death, unfortunately");}
        break;
    case 'RUN':
        var answer = prompt("How much is 52 + 37? Better be quick! Dragon can fly");
        if (answer === "89") {
            console.log("Ha! it was a trap. Dragon ate you while you were counting!"); 
        } else {
            console.log("Right, why waste time on counting while dragon wants to eat you? You have saved your life!");}
        break;
    default:
        console.log("I don't understand, you can choose to TALK, FIGHT or RUN");
}
