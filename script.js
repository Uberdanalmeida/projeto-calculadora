function clicou(nume) {
    const cal = document.getElementById('res')
    cal.innerHTML += `${nume}`
}

function Apag() {
    const cal = document.getElementById('res')
    cal.innerHTML = ''
}

function Dele() {
    const cal = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = cal.substring(0, cal.length -1)
}

function Somou() {
    const cal = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = eval(cal)
}