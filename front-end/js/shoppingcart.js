        
    document.addEventListener("DOMContentLoaded", function(event) { 
        let getArticle = localStorage.getItem ("article")
        console.log(getArticle);
        let objArticle = JSON.parse(getArticle);
        console.log(objArticle);
        let getColor = localStorage.getItem ("color");
        console.log(getColor);
        let getQuantity = localStorage.getItem ("quantity");
        console.log(getQuantity);
});
    document.querySelector(".container-panier").innerHTML+=`<div class="bgprimary">
                                                                <div class = "productid"> test ${getArticle._id}</div>
                                                                <div class = "productimage">${getArticle.image}</div>
                                                                <div class = "productname">${getArticle.name}</div>
                                                                <div class = "productcolor">${getColor}</div>
                                                                <div class="productquantity">${getQuantity}</div>
                                                                <div class ="productprice">${getArticle.price}</div>
                                                            </div>
                                                                <div class ="totalprice"></div>
                                                              <form id="order-form">
                                                            <div class="form-group">
                                                              <label for="name"> Nom </label>
                                                              <input id="name" class="form-control" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="surname"> Prénom </label>
                                                              <input id="surname" class="form-control" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="email"> Adresse email </label>
                                                              <input id="email" class="form-control" type="email" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="adress"> Adresse Postal </label>
                                                              <input id="adress" class="form-control" required />
                                                            </div>
                                                            <div class="form-group">
                                                              <label for="number"> Numéro de téléphone </label>
                                                              <input id="number" class="form-control" required />
                                                            </div>
                                                            <button class="bloc-button btn btn-lg btn-block btn-order" type="submit">
                                                              <a href="orderconfirmation.html">
                                                                Commander 
                                                              </a>
                                                            </button>
                                                          </form>`