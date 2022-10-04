const MAXBALL = 30

const balls = [
    'red', 'blue', 'black', 'purple', 'brown',
]

const ballContainer = document.querySelector('.balloons')

const getRandomColor = ()=>{
   const randomNum = Math.trunc(Math.random() * balls.length); //A random number between 0- arraylength
    return balls[randomNum]
}

for(let i = 0; i<MAXBALL; i++){
    const oneBall = document.createElement('div')
    oneBall.classList.add('ball')
    oneBall.style.backgroundColor = getRandomColor()
    ballContainer.appendChild(oneBall)
}


const ballArray = Array.from(document.querySelectorAll('.ball'))

ballArray.forEach(element=>{
    element.addEventListener('mouseover', (e)=>{
        const actualBall = e.target
        const actualColor = actualBall.style.backgroundColor;
        actualBall.classList.add('pop')
        actualBall.style.backgroundColor = 'white';
        actualBall.style.color = actualColor
        actualBall.textContent = 'POP!'

    })
})
