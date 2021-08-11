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
//verification des saisies de l'utilisateur dans le formulaire
let myForm = document.getElementById("orderform");

let myRegExp= new RegExp('^[a-zA-Z-]+$','g');//les regexp ou expression régulière permettent de rechercher la présence de caractères dans une expression. ^:debut du texte,+:répetion du caractère plusieurs fois, {2,30}:nombre de caractères permis de 2 à 30 $:fin d'expression régulière,'g':marqueur globale \s:espage
let myRegExpmail= new RegExp('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$','g');
let myRegExpaddress= new RegExp('^[a-z0-9-]+$','g');//les regexp ou expression régulière permettent de rechercher la présence de caractères dans une expression. ^:debut du texte,+:répetion du caractère plusieurs fois, {2,30}:nombre de caractères permis de 2 à 30 $:fin d'expression régulière,'g':marqueur globale \s:espage
let myRegExpcp= new RegExp('^[0-9]{5}$','g');
let familyName = document.getElementById("familyname");
let surName = document.getElementById('surname');
let email = document.getElementById('email');
let address = document.getElementById('address');
let codePostal = document.getElementById('codepostal');
let ville = document.getElementById('ville');
let errorText="Saisie invalide";
console.log(email.value)

myForm.addEventListener('click',function(e){
  if (familyname.value.trim==""||myRegExp.test(familyName.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
  document.querySelector(".span-form-name").innerHTML=errorText;
  e.preventDefault();//arrêt soumission
  }
   if (familyname.value.trim==""||myRegExp.test(surName.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
  document.querySelector(".span-form-surname").innerHTML=errorText;
  e.preventDefault();//arrêt soumission
  }
   if (email.value.trim==""||myRegExpmail.test(email.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
    document.querySelector(".span-form-email").innerHTML=errorText;
    e.preventDefault();//arrêt soumission
  }
    if (address.value.trim==""||myRegExpaddress.test(address.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
    document.querySelector(".span-form-address").innerHTML=errorText;
    e.preventDefault();//arrêt soumission
    }
    if (codePostal.value.trim==""||myRegExpcp.test(codePostal.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
      document.querySelector(".span-form-cp").innerHTML=errorText;
  
    e.preventDefault();//arrêt soumission
    }
    if (ville.value.trim==""||myRegExp.test(ville.value) == false) { //trim permet d'enlever les espaces avant et après la valeur
      document.querySelector(".span-form-ville").innerHTML=errorText;
    
    e.preventDefault();//arrêt soumission
    }

// mettre le formulaire dans locale storage
  let contact = {
  firstName: surname.value,
  lastName: familyname.value,  
  address: address.value,
  city: ville.value,
  email: email.value,
  }
  localStorage.setItem("formulaire",JSON.stringify(contact));

  let articles = JSON.parse(localStorage.getItem("article"))
  let products= [];
  for (let p of articles){
    products.push(p._id) 
    }
let dataToSend = {
contact: contact,
products: products
}

function send(e) {
  e.preventDefault();
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dataToSend})
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(dataToSend) {
      document
        .getElementById("result")
        .innerText = dataToSend.postData.text;
  });
}

document
  .getElementById("orderform")
  .addEventListener("submit", send);})