//Programa de Tienda Online para pagina web del proyecto desarrollo web
alert("Bienvenido a Tienda Vlaskogar, seleccione las prendas que conforman al uniforme institucional para comprar");
alert("Lista de productos y precios: \nRemera $8500, \nPantalon $10200, \nCampera $15000");

let producto = prompt("Ingrese el nombre del producto que desea comprar:\nRemera\nPantalon\nCampera");
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas (por ejemplo, 3 - 6 - 12):"));


const Ropa = {
    Remera: {
        Precio: 8500,
    },
    Pantalon: {
        Precio: 10200,
    },
    Campera: {
        Precio: 15000,
    },
};

seleccionarProducto(producto, cuotas);
function seleccionarProducto(producto, cuotas) {
    producto = String(producto);
    let claves = Object.keys(Ropa);
    if (claves.includes(producto)) {
        const precioTotal = Ropa[producto].Precio;
        const precioCuota = precioTotal / cuotas;
        alert("Producto seleccionado: " + producto + "\nPrecio total: $" + precioTotal + "\nPrecio por cuota (" + cuotas + " cuotas): $" + precioCuota.toFixed(2));
        const opcion = prompt("¿Deseas abonar en cuotas? (Sí/No)").toLowerCase();
        if (opcion === "sí" || opcion === "si") {
            alert("Puedes pagar en " + cuotas + " cuotas de $" + precioCuota.toFixed(2) + " cada una.");
        } else {
            alert("El precio total es $" + precioTotal + ". Puedes abonarlo en efectivo.");
        }
    } else {
        alert("Nombre de producto no válido. Por favor, elija uno de los siguientes: " + claves.join(", "));
    }
}


