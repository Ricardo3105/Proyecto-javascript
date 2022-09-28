// const precioOriginal = 120; 

// const descuento = 18; 

// const pprocentajePrecioDescuento = 100 - descuento;

// const precioDescuento = (precioOriginal * pprocentajePrecioDescuento) / 100;

function calcularPrecioDescuento(precioOriginal, descuento) {

    const pprocentajePrecioDescuento = 100 - descuento;

    const precio = (precioOriginal * pprocentajePrecioDescuento) / 100;

    return precio;
}


function calcularPrecioConDescuento() {

    const inputPrecio1 = document.getElementById("inputPrecio");
    const valorPrecio = inputPrecio1.value;
    
    const inputDescuento1 = document.getElementById("inputDescuento");
    const valorDescuento = inputDescuento1.value;
    console.log(valorPrecio);
    console.log(valorDescuento);

    const precioTotal = calcularPrecioDescuento(valorPrecio, valorDescuento);

    const mensaje = document.getElementById("mensaje");

    mensaje.innerText = "El precio total que debe pagar el usuario es de $" + precioTotal;
}

// console.log({
//     precioOriginal,
//     descuento,
//     pprocentajePrecioDescuento,
//     precioDescuento,
// });