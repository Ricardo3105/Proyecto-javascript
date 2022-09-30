const lista1 = [
    1,
    2,
    5,
    4,
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

const listaUnoCount = {};

lista1.map(
    function (elemento) {
        if (listaUnoCount[elemento]) {
            listaUnoCount[elemento] += 1;
        } else {
            listaUnoCount[elemento] = 1;
        }
    }
);

// const lista1Array = Object.entries(listaUnoCount).sort(
//     function (valorAcomulado, nuevoValor) {
//         valorAcomulado - nuevoValor
//     }
// );

const lista1Array = Object.entries(listaUnoCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length -1];
