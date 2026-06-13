let levelDisplay = document.getElementById("level")
let healthDisplay = document.getElementById("health")
let levelButton = document.querySelector("button:last-child");
let attackButton = document.querySelector("button:first-child");

levelButton.addEventListener("click", function() {
    let currentLevel = parseInt(levelDisplay.textContent);
    levelDisplay.textContent = currentLevel + 1;
})

attackButton.addEventListener("click", function() {
    let currentHealth = parseInt(healthDisplay.textContent);
    if (currentHealth > 0){
        healthDisplay.textContent = currentHealth - 20;    
        if (currentHealth - 20 === 0) {
            alert("Snortleblat has died :(");
        }
    }
})