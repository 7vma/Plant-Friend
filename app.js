let waterDisplay = document.querySelector(".water")
let sunDisplay = document.querySelector(".sun")
class Plant {
    constructor(name) {
        this.name = name;
        this.waterPoints = 100;
        this.sunPoints = 100;
    }
    drink() {

        this.waterPoints = this.waterPoints + 25;
        //turn inverval included into each action
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        // return alert ("*Splash*" + (" WP has increased," + " remember not to overwater!"))
        waterDisplay.innerText = this.waterPoints
        sunDisplay.innerText = this.sunPoints

        overKill()
        kill()
    }
    // plant can have more water. if pet reaches 200 WP or 0 WP, plant dies.


    sunbathe() {
        this.sunPoints = this.sunPoints + 25;
        //turn inverval included into each action
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        sunDisplay.innerText = this.sunPoints
        waterDisplay.innerText = this.waterPoints
        overKill()
        kill()
        //return alert('"nice tan!" ' + "SP has increased, " + "remember not to burn your friend!")
    }
    // plant doesnt tolerate too much sun. if SP reaches 200 or reaches 0 SP the plant dies.

    playMusic() {
        this.sunPoints = this.sunPoints - 15;
        this.waterPoints = this.waterPoints - 15;
        //turn inverval included into each action
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        waterDisplay.innerText = this.waterPoints
        sunDisplay.innerText = this.sunPoints
        overKill()
        kill()
        return alert("*Lo-fi music starts playing in the background*")
    }
    // play music passes a turn which which causes SP and WP to lower since a move was taken.
}

const pluto = new Plant("pluto")

function overKill() {
    if (pluto.waterPoints >= 200 || pluto.sunPoints >= 200) {
        document.querySelector(".button1").disabled = true;
        document.querySelector(".button2").disabled = true;
        document.querySelector(".button3").disabled = true;  
        return alert("GameOver")
    }
}

function kill() {
    if (pluto.waterPoints <= 0 || pluto.sunPoints <= 0) {
        document.querySelector(".button1").disabled = true;
        document.querySelector(".button2").disabled = true;
        document.querySelector(".button3").disabled = true;
        alert ("game over!")
    }

}


// function disableBtn() {
//     +   drinkBtn.removeEventListener('click', pluto.drink());
//     +   sunBtn.removeEventListener('click', flipCard);
//         musicBtn.removeEventListener('click', flipCard);
//     + }


let drinkBtn = document.querySelector(".button1")
drinkBtn.addEventListener("click", () => pluto.drink())
// makes drink attach to button1


let sunBtn = document.querySelector(".button2")
sunBtn.addEventListener("click", () => pluto.sunbathe())
// makes sunbathe attach to button2

let musicBtn = document.querySelector(".button3")
musicBtn.addEventListener("click", () => pluto.playMusic())
// makes playMusic attach to button3


// reset button


// function if click 4 times to display image attached to each button