const txt = document.querySelector('#txt')

const divImg = document.querySelector('.divImg')


function bordaDiv() {
    divImg.style.border= '5px solid black' 
}


divImg.addEventListener('click', bordaDiv)

txt.onclick = () => {
    alert('campo de texto clicado!')
}

const clicked = () => {
    console.log('Botão clicado!')
}

txt.addEventListener('keypress', () =>{
    alert('Tecla pressionada!')
})


divImg.addEventListener('mouseouver', () =>{
    divImg.style.opacity = '0.5';
})

divImg.addEventListener('mouseaut', () =>{
    divImg.style.opacity = '1';
})