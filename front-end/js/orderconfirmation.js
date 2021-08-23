//Get order Id from the url
const getOrderId = window.location.search.replace("?","");
console.log(getOrderId);

//get the  cart total price from the localestorage
let getTotalCartPrice= JSON.parse(localStorage.getItem("cartPrice"))

//fill page content with order id and total price
document.querySelector(".card").innerHTML+=`<p class= "card-body">Nous vous confirmons l'enregistrement de votre commande n°${getOrderId} d'un montant de ${getTotalCartPrice}€.</p>`

//clear localstorage when user leave the page
window.addEventListener("beforeunload", function (e) {
localStorage.clear();
});
