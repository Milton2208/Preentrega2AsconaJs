// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio, cantidad) {
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    carrito.push(producto);
}

// Función para calcular el total sin descuento
function calcularTotalSinDescuento() {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

// Función para calcular el descuento
function calcularDescuento(total, descuento) {
    return total * (descuento / 100);
}

// Función para calcular el total con descuento
function calcularTotalConDescuento(total, descuento) {
    return total - descuento;
}

// Capturar entradas mediante prompt()
let nombreProducto = prompt("Introduce el nombre del producto:");
let precioProducto = parseFloat(prompt("Introduce el precio del producto:"));
let cantidadProducto = parseInt(prompt("Introduce la cantidad del producto:"));
let descuento = parseFloat(prompt("Introduce el descuento (en porcentaje):"));

// Agregar el producto al carrito
agregarProducto(nombreProducto, precioProducto, cantidadProducto);

// Realizar las operaciones
let totalSinDescuento = calcularTotalSinDescuento();
let montoDescuento = calcularDescuento(totalSinDescuento, descuento);
let totalConDescuento = calcularTotalConDescuento(totalSinDescuento, montoDescuento);

// Efectuar una salida
alert("Producto: " + agregarProducto);
alert("Total sin descuento: $" + totalSinDescuento.toFixed(2));
alert("Descuento: $" + montoDescuento.toFixed(2));
alert("Total con descuento: $" + totalConDescuento.toFixed(2));

console.log("Producto: " + nombreProducto);
console.log("Total sin descuento: $" + totalSinDescuento.toFixed(2));
console.log("Descuento: $" + montoDescuento.toFixed(2));
console.log("Total con descuento: $" + totalConDescuento.toFixed(2));