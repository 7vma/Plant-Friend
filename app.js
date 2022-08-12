let waterDisplay = document.querySelector(".water")
let sunDisplay = document.querySelector(".sun")

function resetGame() {
    if (document.querySelector(".button1").disabled = true) {
        document.querySelector(".button1").disabled = false;
        document.querySelector(".button2").disabled = false;
        document.querySelector(".button3").disabled = false;
        pluto.waterPoints = 100;
        pluto.sunPoints = 100;
        waterDisplay.innerText = pluto.waterPoints
        sunDisplay.innerText = pluto.sunPoints
    }
}
class Plant {
    constructor(name) {
        this.name = name;
        this.waterPoints = 100;
        this.sunPoints = 100;
    }
    drink() {
        this.waterPoints = this.waterPoints + 25;
        //turn inverval included into each command
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        waterDisplay.innerText = this.waterPoints
        sunDisplay.innerText = this.sunPoints
        overKill()
        kill()
    }

    sunbathe() {
        this.sunPoints = this.sunPoints + 25;
        //turn inverval included into each command
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        sunDisplay.innerText = this.sunPoints
        waterDisplay.innerText = this.waterPoints
        overKill()
        kill()
    }

    playMusic() {
        this.sunPoints = this.sunPoints - 15;
        this.waterPoints = this.waterPoints - 15;
        //turn inverval included into each command
        this.sunPoints = this.sunPoints - 10;
        this.waterPoints = this.waterPoints - 10;
        waterDisplay.innerText = this.waterPoints
        sunDisplay.innerText = this.sunPoints
        overKill()
        kill()
        return alert("*Lo-fi music starts playing in the background*")
    }
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
        alert("Plant died listening to Lo-fi")
    }

}

let drinkBtn = document.querySelector(".button1")
drinkBtn.addEventListener("click", () => pluto.drink())
// makes drink attach to button1


let sunBtn = document.querySelector(".button2")
sunBtn.addEventListener("click", () => pluto.sunbathe())
// makes sunbathe attach to button2

let musicBtn = document.querySelector(".button3")
musicBtn.addEventListener("click", () => pluto.playMusic())
// makes playMusic attach to button3


let resetBtn = document.querySelector(".button4")
resetBtn.addEventListener("click", () => resetGame())
// resetBtn attached to button4