const tails = document.querySelector('.tails');

const jump = () => {
    tails.classList.add('jump');

    setTimeout(()=> {
        tails.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft
    
    if (pipePosition < 120){
        pipe.style.animation = 'none'
        pipe.style.left =
    }
}, 10)

document.addEventListener('keydown', jump);