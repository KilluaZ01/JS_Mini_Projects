function diceRoll(){
    const inputNumber = document.getElementById("number").value;
    const textResult = document.getElementById("diceResult");
    const imageResult = document.getElementById("diceImage");

    const numbers = [];
    const images = [];

    for(let i = 0;i < inputNumber;i++){
        const values = Math.floor((Math.random()*6)+1);
        numbers.push(values);
        images.push(`<img src="dice_images/${values}.svg" alt="Dice ${numbers}">`);
    }
    textResult.textContent = `Your random dice: ${numbers.join(", ")}`;
    imageResult.innerHTML = images.join('');
}