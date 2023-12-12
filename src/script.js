let contador = 1
document.querySelectorAll('.grid-item').forEach(element => {


    let numeroSorteado = geraNumeroAleatorio();
    element.textContent = numeroSorteado
    element.id = contador


    let upValue = parseInt(element.id) - 7
    let downValue = parseInt(element.id) + 7
    let leftValue = parseInt(element.id) - 1
    let rightValue = parseInt(element.id) + 1


    const direcoes = {
        cima: upValue,
        baixo: downValue,
        esqueda: leftValue,
        direita: rightValue,
    }

    element.addEventListener('click', (evt) => {

        let numeroTela = evt.target.textContent;
        let valor = parseInt(element.id)
        let acertou = false;
        let pontos = 0;

        if (document.getElementById(upValue)) {
            let id = parseInt(evt.target.id) - 7
            while (document.getElementById(id) && document.getElementById(id).textContent == numeroTela) {
                trocaNumeroEncontrado(id)
                id = id - 7;
                acertou = true;
                pontos = pontos + 1;
            }
        }


        if (document.getElementById(downValue)) {
            let id = parseInt(evt.target.id) + 7
            while (document.getElementById(id) && document.getElementById(id).textContent == numeroTela) {
                trocaNumeroEncontrado(id)
                id = id + 7;
                acertou = true;
                pontos = pontos + 1;
            }
        }


        if (document.getElementById(leftValue)) {
            let id = parseInt(evt.target.id) - 1
            let aux = valor;
            while ((document.getElementById(id)) && (document.getElementById(id).textContent == numeroTela) && (aux % 7 != 1)) {
                trocaNumeroEncontrado(id)
                aux = aux - 1;
                id = id - 1;
                acertou = true;
                pontos = pontos + 1;
            }
        }


        if (document.getElementById(rightValue)) {
            let id = parseInt(evt.target.id) + 1
            let aux = valor;
            while (document.getElementById(id) && document.getElementById(id).textContent == numeroTela && aux % 7 != 0) {
                trocaNumeroEncontrado(id)
                aux = aux + 1;
                id = id + 1;
                acertou = true;
                pontos = pontos + 1;
            }
        }


        if (acertou == true) {
            trocaNumeroEncontrado(valor)
            pontos = pontos + 1;
        }

        if(pontos != 0){
            document.querySelector('h1').textContent = pontos + 'x COMBO'
        }else{
            document.querySelector('h1').textContent = "NADA"
        }
      

        evt.target.classList.add('clicado')

        // console.log(direcoes);

        setTimeout(() => {
            document.querySelectorAll('.grid-item').forEach(element => {
                element.classList.remove('selecionado')
                element.classList.remove('clicado')
            })
        }, 400);

    })

    contador++;
})


function trocaNumeroEncontrado(id) {
    document.getElementById(id).classList.add('selecionado')
    document.getElementById(id).textContent = geraNumeroAleatorio();
}


function geraNumeroAleatorio() {
    const emojisFrutas = ["🍒", "🍋", "🍉"];
    return emojisFrutas[Math.floor(Math.random() * emojisFrutas.length)];
}