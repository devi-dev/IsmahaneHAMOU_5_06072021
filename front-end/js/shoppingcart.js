  document.querySelector(".container-panier").innerHTML+=`<div class="card-panier">
                                                              <div>Référence de l'article</div>
                                                              <div>Photo de l'article </div>
                                                              <div>Nom de l'article</div>
                                                              <div>Couleur </div>
                                                              <div>Quantité </div>
                                                              <div>Prix unitaire du produit</div>
                                                              <div>Prix total</div>
                                                          </div>`
    
    document.addEventListener("DOMContentLoaded", function(event) { 
        let getArticle = localStorage.getItem ("article")

        let objArticle = JSON.parse(getArticle)

        
        
        for (let article of objArticle){ 

  document.querySelector(".container-panier").innerHTML+=`<div class="card-panier article-information bgprimary">
                                                                <div class="productid">${article._id}</div>
                                                                <img class="productimage card-img-top" src="${article.imageUrl}"/>
                                                                <div class="productname">${article.name}</div>
                                                                <div class="productcolor">${article.selectedColor}</div>
                                                                <div class="productquantity">${article.selectedQuantity}</div>
                                                                <div class="productprice">${article.price/100}.00€</div>
                                                                <div class="totalprice">
                                                                  ${parseInt(article.price)/100*parseInt(article.selectedQuantity)}.00€
                                                                </div>
                                                                <button type="reset" id="remove-btn" class="alert-danger btn">
                                                                Supprimer
                                                                </button>
                                                          </div>` 
  function removeArticle(){
   localStorage.removeItem('article');
  }
  document.querySelector("#remove-btn").addEventListener("click", removeArticle);  
        }
/*
let totalPricePerProduct= "";
let cartLenght= "";
let CartTotalPrice="";                                                   
function getTotalCartPrice(){
totalPricePerProduct= parseInt(article.price)/100*parseInt(article.selectedQuantity)
cartLenght= totalPricePerProduct.lenght
for (let i=0;i<cartLenght;i++){
CartTotalPrice = totalPricePerProduct++;
}}
document.querySelector(".container-panier").innerHTML+=`<div class="total-order-price article-information bgprimary">${CartTotalPrice}</div>`
*/

 

           
                                                                  
  document.querySelector(".container-panier").innerHTML+=`<form id="order-form">
                                                            <div class="form-group">
                                                              <label for="name"> Nom </label>
                                                              <input id="name" name="name" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="surname"> Prénom </label>
                                                              <input id="surname" name="surname" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="email"> Adresse email </label>
                                                              <input id="email" name="email" class="form-control" type="email" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="adress"> Adresse Postal </label>
                                                              <input id="adress" name="adress" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="telNo"> Numéro de téléphone </label>
                                                              <input id="telNo" name="telNo" class="form-control" type="tel" placeholder="06 24 45 67 89" required pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" />
                                                            </div>
                                                            <button class="bloc-button btn btn-lg btn-block btn-order" type="submit">
                                                              <a href="orderconfirmation.html">
                                                                Commander 
                                                              </a>
                                                            </button>
                                                          </form>`
                                                          })