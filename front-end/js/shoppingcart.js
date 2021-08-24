//hydrate shoppingcart.html with article information
  
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
    
        document.querySelector("tbody").innerHTML+=`<tr class="card-panier row article-information bgprimary">
                                                        <td class="cart-column center col image-article">
                                                            <img class="productimage center card-img-top" src="${article.imageUrl}"/>
                                                        </td>
                                                       <td class="cart-column center col color-article">
                                                            <div class="productcolor">${article.selectedColor}</div>
                                                        </td>
                                                        <td class="cart-column center col price-article">
                                                            <div class="productprice">${article.price/100}€</div>
                                                        </td>
                                                        <td class="cart-column center col quantitiy-article">
                                                            <div class="productquantity">${article.selectedQuantity}</div>  
                                                        </td>
                                                        <td class="cart-column center col remove-button-article">
                                                            <button type="reset" onclick="deleteArticle(${i})" id="remove-btn" class="btn-danger btn">
                                                               &times         
                                                            </button>
                                                        </td>
                                                    </tr>` 
                                                    i++;      
      }

    document.querySelector(".table").innerHTML+=`<div class="total-order-price bgsecondary">Prix total panier : ${totalPriceCart}.00€</div>`    
   let storeCartPrice = localStorage.setItem("cartPrice",JSON.stringify(totalPriceCart));
  })

  function deleteArticle(i){
  let element = document.getElementsByClassName("article-information") 
  console.log(element)
  document.querySelector("tbody").removeChild(element[i]);
  objArticle.splice(i,1)

  localStorage.setItem("article", JSON.stringify(objArticle));
  location.reload()
    
  console.log(objArticle[i])
  }

 //user data validity check with RegEx
let myForm = document.getElementById("orderform");

let myRegExName=/^([a-zA-Z]{1,}\s?-?[a-zA-Z]{1,}?)$/;//les regexp ou expression régulière permettent de rechercher la présence de caractères dans une expression. ^:debut du texte,+:répetion du caractère plusieurs fois, {2,30}:nombre de caractères permis de 2 à 30 $:fin d'expression régulière,'g':marqueur globale \s:espage
let myRegExmail=/^([a-z0-9.?_?-?]+@[a-z0-9.?_?-?]{2,}\.[a-z]{2,4})$/;
let myRegExNumber=/^([0-9-?]{0,5})$/

let familyName = document.getElementById("familyname");
let surName = document.getElementById('surname');
let email = document.getElementById('email');
let streetNumber = document.getElementById('numero');
let address = document.getElementById('address');
let codePostal = document.getElementById('codepostal');
let ville = document.getElementById('ville');

let errorText="Saisie invalide";
console.log(email.value)

//réucpérer l'id des produits et les mettre dans un array
  let articles = JSON.parse(localStorage.getItem("article"))
  let products= [];
  for (let p of articles){
    products.push(p._id) 
    }

myForm.addEventListener('submit',function(e){
  if (articles == null || articles == undefined) {
    e.preventDefault();//arrêt soumission
    console.alert("Votre Panier est vide. Sélectionnez des articles pour transmettre une commande")
  }else if (familyName.value =="" || myRegExName.test(familyName.value) == false){
    e.preventDefault();//arrêt soumission
    document.querySelector(".span-form-name").innerHTML=errorText;
     }else if (surName.value.lenght<2 || myRegExName.test(surName.value) == false) {
        document.querySelector(".span-form-name").innerHTML="<i class ='fas fa-check text-success'></i>";
        e.preventDefault();//arrêt soumission
        document.querySelector(".span-form-surname").innerHTML=errorText;
         }else if (streetNumber.value.lenght>5 || myRegExNumber.test(streetNumber.value) == false) {
          document.querySelector(".span-form-surname").innerHTML="<i class ='fas fa-check text-success'></i>";
          e.preventDefault();//arrêt soumission
          document.querySelector(".span-form-numero").innerHTML=errorText;
          }else if (email.value =="" || myRegExmail.test(email.value) == false) {
            document.querySelector(".span-form-numero").innerHTML="<i class ='fas fa-check text-success'></i>";
            e.preventDefault();//arrêt soumission
            document.querySelector(".span-form-email").innerHTML=errorText;
            }else if (address.value.lenght<2 || myRegExName.test(address.value) == false) {
              document.querySelector(".span-form-email").innerHTML="<i class ='fas fa-check text-success'></i>";
              e.preventDefault();//arrêt soumission
              document.querySelector(".span-form-address").innerHTML=errorText;
              }else if (codePostal.value.lenght>5 || myRegExNumber.test(codePostal.value) == false) {
                document.querySelector(".span-form-address").innerHTML="<i class ='fas fa-check text-success'></i>";
                e.preventDefault();//arrêt soumission
                document.querySelector(".span-form-cp").innerHTML=errorText;
                }else if (ville.value.lenght<2 || myRegExName.test(ville.value) == false) {
                  document.querySelector(".span-form-cp").innerHTML="<i class ='fas fa-check text-success'></i>"
                  e.preventDefault();//arrêt soumission
                  document.querySelector(".span-form-ville").innerHTML=errorText;
                  }else{
                    document.querySelector(".span-form-ville").innerHTML="<i class ='fas fa-check text-success'></i>"
                  // si les données transmisent ne contiennent pas d'erreurs, les envoyer au serveur
                    send(e)
                  }

function send(e) {
  e.preventDefault();

  let contact = {
  firstName: surname.value,
  lastName: familyname.value,  
  address: address.value,
  city: ville.value,
  email: email.value,
  };
let dataToSend = {
contact: contact,
products: products
};
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
     body: JSON.stringify(dataToSend),
     headers: { 
      "Content-Type": "application/json",
    }
    })
    .then(function(response) { 
      if (response.ok){
      return response.json()
    }
  })
    .then(function (orderid) {  
    console.log (orderid); 
    window.location.href =`./orderconfirmation.html?${orderid.orderId}`
    })

  .catch(console.error)
}})
