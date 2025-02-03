// dibuat oleh obod
const kolomhasil = document.getElementById('hasil');
let jawaban = document.getElementById('jawaban');
console.log(jawaban);
function tambahinput(value) {
    kolomhasil.value += value;
}

function bersihkan() {
    kolomhasil.value = ''
}

function samadengan(){
    jawaban.value = eval(kolomhasil.value)
}
