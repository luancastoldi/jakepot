let contador = 1
document.querySelectorAll('.grid-item').forEach(element => {



    let numeroSorteado = Math.floor(Math.random() * 2) + 1
    element.textContent = numeroSorteado
    element.id = contador


    let upValue = parseInt(element.id) - 7
    let downValue = parseInt(element.id) + 7
    let leftValue = parseInt(element.id) - 1
    let rightValue = parseInt(element.id) + 1


    element.addEventListener('click', (evt) => {


        evt.target.classList.add('clicado')

        console.log(evt.target.id);
        console.log(upValue);

        if (document.getElementById(upValue) && numeroSorteado == parseInt(document.getElementById(upValue).textContent)) {
            let id = parseInt(evt.target.id) - 7
            trocaNumeroEncontrado(id)
        }

        if (document.getElementById(downValue) && numeroSorteado == parseInt(document.getElementById(downValue).textContent)) {
            let id = parseInt(evt.target.id) + 7
            trocaNumeroEncontrado(id)
        }


        if (document.getElementById(leftValue) && (numeroSorteado == parseInt(document.getElementById(leftValue).textContent)) ) {
            // && (parseInt((evt.target.id) - 1) % 7 != 0)
            // && (parseInt((evt.target.id) - 1) % 7 != 0)
            let id = parseInt(evt.target.id) - 1
            trocaNumeroEncontrado(id)
        }

        if (document.getElementById(rightValue) && (numeroSorteado == parseInt(document.getElementById(rightValue).textContent)) && (parseInt(evt.target.id) % 7 != 0)) {
            // 
            console.log('Direita');
            let id = parseInt(evt.target.id) + 1
            trocaNumeroEncontrado(id)
        }

        setTimeout(() => {

            document.querySelectorAll('.grid-item').forEach(element => {
                element.classList.remove('selecionado')
                element.classList.remove('clicado')
            })
    
        }, 500);
    
    })

    contador++;
})


function trocaNumeroEncontrado(id) {
    // console.log('bingo');
    let random = Math.floor(Math.random() * 2) + 1
    document.getElementById(id).classList.add('selecionado')
    document.getElementById(id).textContent = random


    //    let random2 = Math.floor(Math.random() * 2) + 1
    //    document.getElementsByClassName('clicado')[0].textContent = random2
}