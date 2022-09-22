
//Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();


//Lado triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// console.log("La altura del triangulo mide: " + alturaTriangulo+ "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

// console.log("El perimetro del triangulo mide: " + perimetroTriangulo+ "cm");

function areaTriangulo(base, altura) {
    return (base * altura) /2
};

// console.log("El area del triangulo mide: " + areaTriangulo+ "cm^2");

console.groupEnd();

//Lado Circulos
console.group("Circulos");

//Radio
// const radioCirculo = 4;

// console.log("El radio del circulo mide: " + radioCirculo + " cm");


//Diametro
function diametroCirculo(radio) {
    return radio * 2;
};

// console.log("El diametro del circulo mide: " + diametroCirculo + " cm");


//PI
const PI = Math.PI

// console.log("El valor de PI es: " + PI);


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// console.log("la circunferencia del circulo mide: " + circunferenciaCirculo + " cm");


//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
};

// console.log("El area del circulo mide: " + areaCirculo + " cm");


console.groupEnd();


// Interactua,os con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);  
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Actividad "H de una triangulo isoseles"

function calcularAlturaTrianguloIsoseles (hipo, bas) {
    const hipo2 = hipo*hipo;
    const bas2 = bas*bas;

    const resta = hipo2 - bas2

    const resultado = Math.sqrt(resta);

    return resultado;

}


function alturaTrianguloIsoseles () {
    const inputHipotenusa = document.getElementById("hipotenusa");
    const hipotenusa = inputHipotenusa.value;

    const inputBase = document.getElementById("base");
    const base = inputBase.value;

    
    const respuesta = calcularAlturaTrianguloIsoseles(hipotenusa, base);

    alert(respuesta);

}