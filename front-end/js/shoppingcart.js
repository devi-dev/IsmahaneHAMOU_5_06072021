//hydrate shoppingcart.html with article information
  document.querySelector(".container-panier").innerHTML+=`<div class="card-panier article-information bgsecondary">
                                                              <div>Référence 
                                                              </div>
                                                              <div>Photo
                                                              </div>
                                                              <div>Nom
                                                              </div>
                                                              <div>Couleur
                                                              </div>
                                                              <div>Quantité
                                                              </div>
                                                              <div>PU
                                                              </div>
                                                              <div>PT
                                                              </div>
                                                              <div>Retirer
                                                              </div>
                                                          </div>`
  let getArticle = localStorage.getItem ("article"); //get data stocked in local storage (format:JSON) and set a variable to use it

  let objArticle = JSON.parse(getArticle); //convert format of data stocked in local storage (format :javascript) and set a variable to use it
    
  document.addEventListener("DOMContentLoaded", function(event) { //DOM need to be loaded before the function
      let totalPriceCart= 0;
      let i = 0;
      for (let article of objArticle){ 
        if(parseInt(article.price) > 0){
          totalPriceCart += parseInt(article.price/100) * parseInt(article.selectedQuantity);
          }else{
          totalPriceCart += 0;
          }

    document.querySelector(".container-panier").innerHTML+=`<div class="card-panier article-information bgprimary shrink">
                                                                <div class="productid">${article._id}
                                                                </div>
                                                                <img class="productimage card-img-top" src="${article.imageUrl}"/>
                                                                <div class="productname">${article.name}
                                                                </div>
                                                                <div class="productcolor">${article.selectedColor}
                                                                </div>
                                                                <div class="productquantity">${article.selectedQuantity}
                                                                </div>
                                                                <div class="productprice">${article.price/100}.00€
                                                                </div>
                                                                <div class="totalprice">
                                                                  ${parseInt(article.price)/100*parseInt(article.selectedQuantity)}.00€
                                                                </div>
                                                                <button type="reset" onclick = "deleteArticle(${i})" id="remove-btn" class="danger-btn btn">
                                                                  Supprimer
                                                                </button>
                                                          </div>` 
                                                          i++;
    }

    document.querySelector(".container-panier").innerHTML+=`<div class="total-order-price article-information bgprimary">Prix total panier : ${totalPriceCart}.00€</div>`    
    })

    function deleteArticle(i){
    let element = document.getElementsByClassName("article-information") 
    document.querySelector(".container-panier").removeChild(element[i]);
    objArticle.splice(i,1)

    localStorage.setItem("article", JSON.stringify(objArticle));
    location.reload()
    
  console.log(objArticle[i])
}

document.querySelector("#order-form").innerHTML+=`<div class="form-group">
                                                                <label for="name"> Nom </label>
                                                                <input id="name" name="name" class="form-control" type="text" required placeholder="Ourson"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="surname"> Prénom </label>
                                                                <input id="surname" name="surname" class="form-control" type="text" required placeholder="Teddy"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="email"> Adresse email </label>
                                                                <input id="email" name="email" class="form-control" type="email" required placeholder="teddy.ourson@gmail.com"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="adress"> Adresse </label>
                                                                <input id="adress" name="adress" class="form-control" placeholder="Rue aux Ours" type="text" required />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="codepostal"> Code postal </label>
                                                                <input id="codepostal" name="codepostal" class="form-control" placeholder="75003" required pattern="[0-9]{5}"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="ville"> Ville </label>
                                                                <input id="ville" name="ville" class="form-control" placeholder="Paris" type="text" required />
                                                            </div>                
                                                            <div class="form-group">
                                                                <label for="telNo"> Numéro de téléphone </label>
                                                                <input id="telNo" name="telNo" class="form-control" type="tel" placeholder="06 24 45 67 89" required pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" />
                                                            </div>
                                                             <input class="bloc-button btn btn-lg btn-block btn-order" type="submit">
                                                                <a href="orderconfirmation.html">
                                                                  Commander 
                                                                </a>
                                                            </input>`;
