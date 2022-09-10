let nome;
let notaDoPrimeiroBimeste;
let notaDoSegundoBimestre;
let notaDoTerceiroBimestre;
let notaDoQuartoBimestre;
let media;
const modal = document.getElementById("modal");


function calcularMedia() {
    const notaFinalArredondada = ((parseFloat(notaDoPrimeiroBimeste) + parseFloat(notaDoSegundoBimestre) + parseFloat(notaDoTerceiroBimestre) + parseFloat(notaDoQuartoBimestre)) / 4).toFixed(1);

    modal.innerHTML = `<h1 class="texto-modal">${notaFinalArredondada}</h1>`;

    if (notaFinalArredondada < media) {
        modal.innerHTML += "<h1 class='texto-modal failure'>Você tirou abaixo da média</h1>"
    }

    if (notaFinalArredondada >= media) {
        modal.innerHTML += "<h1 class='texto-modal success'>Parabéns! Você foi aprovado!</h1>";
    }
    console.log('rodou')
}

document.getElementById("identificadorDeUsuario").addEventListener(
    "submit",
    function (e) {
        e.preventDefault();
        receberNome();
        modalParaReceberNotas();
        document.getElementById("notas").addEventListener(
            "submit",
            function (e) {
                e.preventDefault();
                console.log('Chamou a func');
                receberNotas();
                calcularMedia();
            },
        );
    },
);

function receberNome() {
    nome = document.getElementById("nomeDoUsuario").value;
};

function modalParaReceberNotas() {
    modal.innerHTML = `<h2 class="texto-modal">Agora insira as notas dos seus respectivos bimestres</h2>
    <form id="notas" class="form-notas d-flex">
        <div class="container-notas">
            <div class="d-flex">
                <label for="nota-1">Nota 1</label>
                <input type="number" class="input-notas" id="primeiraNota" max="10" min="0" name="nota-1">
            </div>
            <div class="d-flex">
                <label for="nota-2">Nota 2</label>
                <input type="number" class="input-notas" id="segundaNota" max="10" min="0" name="nota-2">
            </div>
            <div class="d-flex">
                <label for="nota-3">Nota 3</label>
                <input type="number" class="input-notas" id="terceiraNota" max="10" min="0" name="nota-3">
            </div>
            <div class="d-flex">
                <label for="nota-4">Nota 4</label>
                <input type="number" class="input-notas" id="quartaNota" max="10" min="0" name="nota-4">
            </div>
        </div>
        <div class="padding-min d-flex">
            <label for="media">Média</label>
            <input type="number" class="input-notas" id="media" max="8" min="5" name="media">
        </div>
        <input class="btn-envio" type="submit" value="Calcular Média">
    </form>`;
}

function receberNotas() {
    notaDoPrimeiroBimeste = document.getElementById("primeiraNota").value;
    notaDoSegundoBimestre = document.getElementById("segundaNota").value;
    notaDoTerceiroBimestre = document.getElementById("terceiraNota").value;
    notaDoQuartoBimestre = document.getElementById("quartaNota").value;
    media = document.getElementById("media").value;
}