// const countryName = "КитаЙ";
// const countryName = 'Выберите страну';
const countryName = prompt('Выберите страну');

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

if (countryName === null) {
  console.log((message = CANCELED_BY_USER));
} else {
  switch (countryName.toUpperCase()) {
    case CHINA.toUpperCase(): {
      price = 100;
      message = `Доставка в ${CHINA} будет стоить ${price} кредитов`;
      break;
    }

    case AUSTRALIA.toUpperCase(): {
      price = 170;
      message = `Доставка в ${AUSTRALIA} будет стоить ${price} кредитов`;
      break;
    }

    case INDIA.toUpperCase(): {
      price = 80;
      message = `Доставка в ${INDIA} будет стоить ${price} кредитов`;
      break;
    }

    case JAMAICA.toUpperCase(): {
      price = 120;
      message = `Доставка в ${JAMAICA} будет стоить ${price} кредитов`;
      break;
    }

    default:
      alert('В выбранную страну доставка не доступна.');
  }
  console.log(message);
}
