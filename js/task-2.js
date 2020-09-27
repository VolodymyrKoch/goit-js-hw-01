let invoice = 50; // замовлення
const stock = 100; // склад

// Write code under this line
const message =
  stock >= invoice
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(message);

// stock = 50
// message = invoice >= stock ? `Заказ оформлен, с вами свяжется менеджер` : `На складе недостаточно товаров!`
// console.log(message)
