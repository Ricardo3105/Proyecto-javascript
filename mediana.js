function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}



const lista1 = [
    100,
    200,
    500,
    400000000,
    1,
    2,
    4,
    5,
    6,
    5,
    3,
    2,
    4,
    3,
    5,
    7,
    8,
];

const listaOrdenada = lista1.sort((a, b) => a-b);

console.log(listaOrdenada)


const mitadLista1 = parseInt(lista1.length / 2);


function esPar(numero) {

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])

    mediana = promedioElemento1y2;
    
} else {    
    mediana = lista1[mitadLista1];
}