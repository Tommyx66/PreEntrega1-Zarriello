//Precio por unidades
const unitPrice = 14.99;

//Stock
const unitStock = 500;

//Descuentos
const noDiscount = 1;
const firstDiscount = (1 - 0.10);
const secondDiscount = (1 - 0.25);
const thirdDiscount = (1 - 0.35);

//Envío gratis
const fee = 7.99;

alert("Bienvenidos al Tame Impala Shop");

let nameEntered = prompt("Por favor introduzca su nombre:");

alert(`Hola ${nameEntered}!`);

var agePrompt=prompt("Por favor introduzca su edad");

if (agePrompt<16) {
  alert('Lo sentimos! Nuestros productos pueden contener imagenes o alegorías a cuestiones no aptas para todo publico');
  window.location.href = 'http://www.google.com';
  alert(`Vuelve en unos años!`);   
} else {
  alert('Ahora tienes acceso a nuestro catálogo:')
}

  alert(`Cada T-Shirt están solo por este mes a $14.99!
  Here are our prices and discounts:
  1 T-Shirt = $14.99 + envío gratis
  1 pack (6 T-Shirts) = 10% de descuento + envío gratis
  +2 packs = 25% sin envío gratis
  5 o más packs = 35% sin envío gratis`);

let quantity = parseInt(prompt("Cuántas unidades?"));

while (quantity > unitStock) { 
  alert(`Nuestro stock máximo es ${unitStock} unidades.`);
  quantity = prompt("Por favor ingrese otro número:");
}

//Function
function priceCalculator(quantity, unitPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, fee) {
  if (quantity >= 0 && quantity <= 1) {
    let finalPrice = ((quantity * unitPrice * noDiscount) + fee)
    return finalPrice.toFixed(2);
  }
  else if (quantity >= 6 && quantity <= 12) {
    let finalPrice = ((quantity * unitPrice * firstDiscount) + fee)
    return finalPrice.toFixed(2);
  }
  else if (quantity >= 13 && quantity <= 41) {
    let finalPrice = (quantity * unitPrice * secondDiscount)
    return finalPrice.toFixed(2);
  }
  else {
    let finalPrice = (quantity * unitPrice * thirdDiscount)
    return finalPrice.toFixed(2);
  }
}

alert("El total es: $" + priceCalculator(quantity, unitPrice, noDiscount, firstDiscount, secondDiscount, thirdDiscount, fee));

alert("Gracias por tu compra! Esperamos que vuelvas pronto!. Tame Impala.");