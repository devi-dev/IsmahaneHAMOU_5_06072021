
document.addEventListener("DOMContentLoaded", function(event) {

//Get order Id from the url
const getOrderId = window.location.search.replace("?","");
console.log(getOrderId);

//get the  cart total price from the localestorage
let getTotalCartPrice= JSON.parse(localStorage.getItem("cartPrice"))

//fill page content with order id and total price
if (getTotalCartPrice==null) {
document.querySelector(".card").innerHTML+=`<h2 class="card-header text-center">Votre panier est vide!</h2>
                                            <p class="card-body">Nous vous remercions de bien vouloir ajouter un produit au panier pour passer commande.</p>`
}else{
document.querySelector(".card").innerHTML+=`<h2 class="card-header text-center">Nous vous remercions de votre achat!</h2>
                                            <p class="card-body">Nous vous confirmons l'enregistrement de votre commande n°${getOrderId} d'un montant de ${getTotalCartPrice}€.</p>`
}
})

//clear localstorage when user leave the page
window.addEventListener("beforeunload", function (e) {
localStorage.clear();
});
