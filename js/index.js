
const resultado = document.querySelector('#resultado'); 

function insert (n) {

    const num = resultado.innerHTML; 

    return resultado.innerHTML = num + n; 

}

function limpa () {

    return resultado.innerHTML = ' '; 

}


function back () {

    const num = resultado.innerHTML;
    return resultado.innerHTML = num.substring(0, num.length -1); 

}

function calcula () {

    const num = resultado.innerHTML;

    if (num) {
        resultado.innerHTML = eval(num); 
    }

}