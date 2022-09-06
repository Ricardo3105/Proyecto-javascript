
//Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();


//Lado triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

console.log("La altura del triangulo mide: " + alturaTriangulo+ "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo mide: " + perimetroTriangulo+ "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2

console.log("El area del triangulo mide: " + areaTriangulo+ "cm^2");

console.groupEnd();

//Lado Circulos
console.group("Circulos");

//Radio
const radioCirculo = 4;

console.log("El radio del circulo mide: " + radioCirculo + " cm");


//Diametro
const diametroCirculo = radioCirculo * 2;

console.log("El diametro del circulo mide: " + diametroCirculo + " cm");


//PI
const PI = Math.PI;

console.log("El valor de PI es: " + PI);


//Circunferencia
const circunferenciaCirculo = diametroCirculo * PI;

console.log("la circunferencia del circulo mide: " + circunferenciaCirculo + " cm");


//Area
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log("El area del circulo mide: " + areaCirculo + " cm");


console.groupEnd();



