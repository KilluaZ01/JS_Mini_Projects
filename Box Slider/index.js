const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keyup", event => {
    myBox.textContent = "🟣"
    myBox.style.backgroundColor = "white"
})

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                document.addEventListener("keydown", event => {
                    myBox.textContent = "⬆️"
                    myBox.style.backgroundColor = "white"
                })
                break;
            
            case "ArrowDown":
                y += moveAmount;
                document.addEventListener("keydown", event => {
                    myBox.textContent = "⬇️"
                    myBox.style.backgroundColor = "white"
                })
                break;

            case "ArrowLeft":
                x -= moveAmount;
                document.addEventListener("keydown", event => {
                    myBox.textContent = "⬅️"
                    myBox.style.backgroundColor = "white"
                })
                break;

            case "ArrowRight":
                x += moveAmount;
                document.addEventListener("keydown", event => {
                    myBox.textContent = "➡️"
                    myBox.style.backgroundColor = "white"
                })
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;        
    }
})