const character = document.querySelector('.character')
let computerBtn = document.querySelector('.computer')
let selectPage = document.querySelector('.select')
let friendBtn = document.querySelector('.friend')
let loading = document.querySelector('.wrapper')
let zaxiraText = document.querySelector('.text')
const fullBox = document.querySelector('.full')
let rival = document.querySelectorAll('.rival')
let characterStatus = 'idle'
let rivalStatus = 'idle2'
let selectPlayer = false
let statusTurn = false
let gameStart = true




// select Type Fighting
friendBtn.addEventListener('click', function(){
    gameStart = true
    selectPlayer = true
})
computerBtn.addEventListener('click', function(){
    gameStart = true
    selectPlayer = false
})

// characterStatus checking
let check = setInterval(() => {
    if (characterStatus=='idle') {
        character.style.animation = 'idle 1s ease infinite'
    }
    if (characterStatus=='walk') {
        character.style.animation = 'walk 1s ease infinite'
        setTimeout(() => {
            if (characterStatus=='walk') {
                characterStatus = 'idle'
            }
        }, 1001);
    }
    if (characterStatus=='attack') {
        character.style.animation = 'attack 0.5s ease infinite'
        setTimeout(() => {
            if (characterStatus=='attack') {
                characterStatus = 'idle'
            }
        }, 501);
    }
    if (gameStart==true) {
        rival[0].style.display = 'flex'
        character.style.display = 'flex'
        selectPage.style.display = 'none'
        fullBox.style.backgroundImage = 'url("/images/background.png")'
    }
});

// character controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true) {
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
        let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'))
        switch (event.key) {
            case "a":
                characterStatus = 'walk'
                if (characterLeft>100) {
                    character.style.left = characterLeft - 100 + 'px'
                }
                break;
            case "d":
                characterStatus = 'walk'
                if (characterRight>100) {
                    character.style.left = characterLeft + 100 + 'px'
                }
                break;
            case " ":
                characterStatus = 'attack'
                break;
            default:
                break;
        }
    }
})

// rivalStatus checking
let check2 = setInterval(() => {
    rival.forEach(function(rival){
        if (rivalStatus=='idle2') {
            rival.style.animation = 'idle2 1s infinite'
        }
        if (rivalStatus=='walk2') {
            rival.style.animation = 'walk2 1s infinite'
            setTimeout(() => {
                if (rivalStatus=='walk2') {
                    rivalStatus = 'idle2'
                }
            }, 1001);
        }
        if (rivalStatus=='attack2') {
            rival.style.animation = 'attack2 0.5s infinite'
            setTimeout(() => {
                if (rivalStatus=='attack2') {
                    rivalStatus = 'idle2'
                }
            }, 501);
        }
    })
});

// rival controller keyup
window.addEventListener('keyup', function(event){
    if (gameStart==true&&selectPlayer==true) {
        rival.forEach(function(rival2){
            let rivalLeft = parseInt(window.getComputedStyle(rival2).getPropertyValue('left'))
            let rivalRight = parseInt(window.getComputedStyle(rival2).getPropertyValue('right'))
            switch (event.key) {
                case "ArrowLeft":
                    rivalStatus = 'walk2'
                    if (rivalLeft>100) {
                        rival2.style.left = rivalLeft - 100 + 'px'
                    }
                    break;
                case "ArrowRight":
                    rivalStatus = 'walk2'
                    if (rivalRight<100) {
                        rival2.style.left = rivalLeft + 100 + 'px'
                    }
                    break;
                case "ArrowDown":
                    rivalStatus = 'attack2'
                    break;
                default:
                    break;
            }
        })
    }
})