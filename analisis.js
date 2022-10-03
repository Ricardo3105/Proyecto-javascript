const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}

function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persona1 = lista[mitad -1];
        const persona2 = lista[mitad];

        const mediana = calcularMediaAritmetica([persona1, persona2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};


const medianaGeneralCol = medianaSalarios(salariosColSorted);


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});