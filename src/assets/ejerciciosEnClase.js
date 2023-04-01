const invertir = (string)=> {
    const arrayLetra = string.split('');
    let letras = "";
    for (let i= 0; i < arrayLetra.length; i++){
        if(arrayLetra[i] === arrayLetra[i].toUpperCase()){
            letras = letras + arrayLetra[i].toLowerCase();
        }
        else {
            letras = letras + arrayLetra[i].toUpperCase();
        }
    }
    return letras;
}

console.log(invertir("naTalIa"))


const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo');
    const sam = personajes.indexOf('Sam');
    return sam - frodo === 1 || sam - frodo === -1;
}
console.log(estarJuntos(['Sam', 'Frodo', 'Legolas'])); //true
console.log(estarJuntos(['Sam', 'Legolas', 'Frodo'])); //false

function gano(tragamonedas){
    if ( tragamonedas.length < 5 ) {
        return false;
    }
    for (let i = 1; i < 5; i++){
        if (tragamonedas[i] !== tragamonedas[0]) {
            return false;
        }
    }
    return true;
}

let tragamonedas1 = ['!','#','&','%','&'];
let tragamonedas2 = ['?','?','?','?','?'];

console.log(gano(tragamonedas1));
console.log(gano(tragamonedas2));

