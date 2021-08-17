//hydrate shoppingcart.html with article information
  
  let getArticle = localStorage.getItem ("article"); //get data stocked in local storage (format:JSON) and set a variable to use it
  let productNumbers = localStorage.getItem("cartNumbers");

  let objArticle = JSON.parse(getArticle); //convert format of data stocked in local storage (format :javascript) and set a variable to use it
    
  document.addEventListener("DOMContentLoaded", function(event) { //DOM need to be loaded before the function
      let selectedQuantity= 1;
      let totalPriceCart= 0;
      let i = 0;
      for (let article of objArticle){ 
        if(parseInt(article.price) > 0){
          totalPriceCart += parseInt(article.price/100) * parseInt(selectedQuantity);
          }else{
          totalPriceCart += 0;
          }

    document.querySelector("table").innerHTML+=`<tbody>
                                                    <tr class="card-panier row article-information bgprimary">
                                                        <td class="cart-column center col image-article">
                                                            <img class="productimage center card-img-top" src="${article.imageUrl}"/>
                                                        </td>
                                                       
                                                        <td class="cart-column center col price-article">
                                                            <div class="productprice">${article.price/100}.00€</div>
                                                        </td>
                                                        <td class="cart-column center col quantitiy-article">
                                                            <div class="productquantity">
                                                                <button class="remove-one fas fa-minus-square"></button>
                                                                <span class=quantity>${selectedQuantity}</span>
                                                                <button class="add-one fas fa-plus-square"></button>
                                                            </div>  
                                                        </td>
                                                        <td class="cart-column center col remove-button-article">
                                                            <button type="reset" id="remove-btn" class="btn-danger btn">
                                                               &times         
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>` 
                                                i++;      
    }

    document.querySelector(".table").innerHTML+=`<div class="total-order-price bgsecondary">Prix total panier : ${totalPriceCart}.00€</div>`    
    })
    function deleteArticle(i){
    let element = document.querySelector("tbody") 
    console.log(element)
    document.querySelector("tr").removeChild(element[i]);
    objArticle.splice(i,1)

    localStorage.setItem("article", JSON.stringify(objArticle));
    location.reload()
    
  console.log(objArticle[i])
}

    
    

/*verification des saisies de l'utilisateur dans le formulaire
let myForm = document.getElementById("orderform");

let myRegExp= new RegExp('^[a-zA-Z-\s]+$','g');//les regexp ou expression régulière permettent de rechercher la présence de caractères dans une expression. ^:debut du texte,+:répetion du caractère plusieurs fois, {2,30}:nombre de caractères permis de 2 à 30 $:fin d'expression régulière,'g':marqueur globale \s:espage
let myRegExpmail= new RegExp('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$','g');
let myRegExpaddress= new RegExp('^[a-z0-9-]+$','g');//les regexp ou expression régulière permettent de rechercher la présence de caractères dans une expression. ^:debut du texte,+:répetion du caractère plusieurs fois, {2,30}:nombre de caractères permis de 2 à 30 $:fin d'expression régulière,'g':marqueur globale \s:espage
let myRegExpcp= new RegExp('^([A-Z]+[A-Z]?\-)?[0-9]{1,2} ?[0-9]{3}$','g');
let familyName = document.getElementById("familyname");
let surName = document.getElementById('surname');
let email = document.getElementById('email');
let address = document.getElementById('address');
let codePostal = document.getElementById('codepostal');
let ville = document.getElementById('ville');
let errorText="Saisie invalide";
console.log(email.value)

myForm.addEventListener('submit',function(e){
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
    }*/

// creer un objet contact et mettre le formulaire dans locale storage
  let contact = {
  firstName: surname.value,
  lastName: familyname.value,  
  address: address.value,
  city: ville.value,
  email: email.value,
  };

  let articles = JSON.parse(localStorage.getItem("article"))
  let products= [];
  for (let p of articles){
    products.push(p._id) 
    }
    
let dataToSend = {
contact: contact,
products: products
};

function send(e) {
  e.preventDefault();
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
     body: JSON.stringify(dataToSend),
     headers: { 
      "Content-Type": "application/json",
    },
   
  });
  
}
document
  .getElementById("orderform")
  .addEventListener("submit", send);//})