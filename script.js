//botão
let btnSortear = document.getElementById('btn-sortear').addEventListener('click', sortear)
let containerBotao = document.getElementById('containerBotao')
//variáveis
//indicador
let indicador = document.getElementById('indicador')
indicador.innerText = '?'

//imagem
let img = document.getElementById('img-dado')
img.src = '/curso youtube/aula 16/img/0.png'

//audio
let audio = new Audio('/curso youtube/aula 16/som/dado-rolando.mp3')



//função sortear
function sortear() {
    //tocar audio
    audio.play()

    //resetar img e indicador, efeito de jogar o dado
    img.src = '/curso youtube/aula 16/img/0.png'
    indicador.innerText = '?'

    //sumir com o botao
    containerBotao.classList.add('hide')



    setTimeout(() => {
        //gerar número aleatório de 1 a 6 e mostrar no indicador
        let n = (Math.floor(Math.random() * 6) + 1);
        indicador.innerText = n

        //lógica da imagem
        if (n == 1) {
            img.src = '/curso youtube/aula 16/img/1.png'
        } else if (n == 2) {
            img.src = '/curso youtube/aula 16/img/2.png'
        } else if (n == 3) {
            img.src = '/curso youtube/aula 16/img/3.png'
        } else if (n == 4) {
            img.src = '/curso youtube/aula 16/img/4.png'
        } else if (n == 5) {
            img.src = '/curso youtube/aula 16/img/5.png'
        } else if (n == 6) {
            img.src = '/curso youtube/aula 16/img/6.png'
        }

        //fazer o botao reaparecer
        containerBotao.classList.remove('hide')





    }, 600);



}

