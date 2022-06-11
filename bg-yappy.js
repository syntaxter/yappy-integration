var theme;
var image;
var donation;

var YappyCheckout = {
    COLOR_DEL_BOTON: "dark",
    DONACION: false,
    ACTIVAR: true // LA OPCION ACTIVAR ESTA POR DEFECTO, NO SE NECESITA COLOCARLE EL VALOR DE true
}


if (YappyCheckout.ACTIVAR === undefined || YappyCheckout.ACTIVAR === true) {
  setYappyButton();
}

function setYappyButton() {

  var themes = {
    brand: 'yappy-logo-brand.svg',
    dark: 'yappy-logo-dark.svg'
  }

  document.getElementsByTagName("head")[0].insertAdjacentHTML(
    "beforeend",
    "<link rel=\"stylesheet\" href=\"https://pagosbg.bgeneral.com/assets/css/styles.css\" />");

  theme = YappyCheckout.COLOR_DEL_BOTON ? YappyCheckout.COLOR_DEL_BOTON : 'brand';
  var logo = themes[theme];
  if (!logo) {
    logo = 'yappy-logo-light.svg';
  }

  image = `<img src="https://pagosbg.bgeneral.com/assets/img/${logo}">`
  var textButton = YappyCheckout.DONACION ? 'Donar con&nbsp;' : 'Pagar con&nbsp;';

  // Debes crear un elemento en el con la clase Yappy_Checkout_Button para el renderizado

  document.getElementById('Yappy_Checkout_Button').classList.add('ecommerce', 'yappy', theme);
  document.getElementById('Yappy_Checkout_Button').innerHTML = textButton + image;

  document.getElementById('Yappy_Checkout_Button').addEventListener('click', function () {
    document.getElementById('yappyForm').submit();
  });
}
