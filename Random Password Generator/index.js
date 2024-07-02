function generatePassword(){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    const totalLength = document.getElementById("length").value;
    const result = document.getElementById("genPass");

    let allowedChars = "";
    let password = "";

    allowedChars += lowercaseChars;
    allowedChars += uppercaseChars;
    allowedChars += numberChars;
    allowedChars += symbolChars;

    for(let i = 0; i < totalLength; i++){
        const randomIndex = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomIndex];
        result.textContent = `${password}`;
    }
}