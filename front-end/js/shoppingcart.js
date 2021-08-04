
    
    document.addEventListener("DOMContentLoaded", function(event) { 
        let getArticle = localStorage.getItem ("article")

        let objArticle = JSON.parse(getArticle)

        for (let article of objArticle){ 

  document.querySelector(".container-panier").innerHTML+=`<div class="bgprimary">
                                                                        <div class = "productid"> ${article._id}</div>
                                                                        <img class = "productimage" src="${article.imageUrl}"/>
                                                                        <div class = "productname">${article.name}</div>
                                                                        <div class = "productcolor">${article.selectedColor}</div>
                                                                        <div class="productquantity">${article.selectedQuantity}</div>
                                                                        <div class ="productprice">${article.price/100}.00€</div>
                                                                      </div>
                                                                      <div class ="totalprice">${article.price/100}*${article.selectedQuantity}.00€</div>`
                                    }
                                                                  
  document.querySelector(".container-panier").innerHTML+=`<form id="order-form">
                                                            <div class="form-group">
                                                              <label for="name"> Nom </label>
                                                              <input id="name" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="surname"> Prénom </label>
                                                              <input id="surname" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="email"> Adresse email </label>
                                                              <input id="email" class="form-control" type="email" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="adress"> Adresse Postal </label>
                                                              <input id="adress" class="form-control" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="number"> Numéro de téléphone </label>
                                                              <input id="number" class="form-control" type="number" required />
                                                            </div>
                                                            <button class="bloc-button btn btn-lg btn-block btn-order" type="submit">
                                                              <a href="orderconfirmation.html">
                                                                Commander 
                                                              </a>
                                                            </button>
                                                          </form>`
                                                          });