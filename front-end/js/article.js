//find the article's id from the URL
const getParameters = window.location.search.replace("?","");
let selectedArticle;
//request the article information with url parameter 
fetch(`http://localhost:3000/api/teddies/${getParameters}`)

  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })

  .then(function (article) {  
       console.log (article);
       this.selectedArticle = article;
       
        let html = `<div class="card bgprimary article-card">
                      <img class="card-img-top article-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                          <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label> <br/>
                                                                <select name="colors" id="colors-selection" required onchange="showcolor()">`;
                                                                    
                                                                    for (let color of article.colors){
                                                                    html+=`<option value=${color} required selected="selected" id="colors">${color}</option>`;
                                                                    }
                                                                                                                                       
                                                         html+=`</select></br></br>
                                                                <label for="quantity">Quantité souhaitée:</label><br/>
                                                                <select name="quantity" id="quantity-selection" onchange="showquantity()">
                                                                    <option value="label">--Quantité--</option>
                                                                    <option value="1" selected="selected">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>

                                                                </br></br>
                                                                <div class="card-text description">${article.description}</div>`
                                                                 html+=`<button onclick="setData()" id="add-cart" class="add-cart" type="submit">Ajouter au Panier </button>
                                                                          <div id="overlay" class="overlay">  
                                                                            <div class="popup">
                                                                            <p id="btn-close-popup" class="btn-close-popup">&times;</p> 
                                                                            <h3 class="popup-title">Votre article a été ajouté au panier</h3>
                                                                            <p class="popup-text">Que souhaitez vous faire?</p>
                                                                            <button class="popup-btn-acceuil"><a href = index.html>Revenir à l'acceuil</a></button>
                                                                            <button class="popup-btn-panier"><a href = shoppingcart.html>Voir le panier</a></button>
                                                                            </div>
                                                                          </div>  `                                                              
                                                           html+=`</div>
                                                         </div>`;
                                                        
                                                         document.querySelector(".container").innerHTML +=html;
   
  })
  .catch(console.error);

  //afficher la pop-up lorsque l'utilisateur clique sur le panier
 


  //collecter les élements selectionnés et les stocker dans locale.storage
  

 function showcolor(){
        let getColorSelected = document.querySelector("#colors-selection").value;
         if(getColorSelected == null || getColorSelected == undefined){
           getColorSelected = this.selectedArticle[1]
          } else {
        this.selectedArticle["selectedColor"]=getColorSelected;
        console.log(this.selectedArticle)
         }}
         
         
    function showquantity(){
        let getQuantitySelected = document.querySelector("#quantity-selection").value;
        console.log(getQuantitySelected)
        this.selectedArticle["selectedQuantity"]=getQuantitySelected;
        console.log(this.selectedArticle)
         }
 
    function closePopup(){
      overlay.style.display = "none";
    }
    
    function setData(){
      let getArticle = JSON.parse(localStorage.getItem ("article"));
      if (getArticle != null && getArticle != undefined){
      getArticle.unshift(this.selectedArticle)
      localStorage.setItem("article",JSON.stringify(getArticle));
      }
      else{
        let panier = [];
        panier.unshift(this.selectedArticle)
        localStorage.setItem("article",JSON.stringify(panier));
      }
        console.log(this.selectedArticle);
        let overlay = document.querySelector("#overlay")
        overlay.style.display = "block";
        document.querySelector("#btn-close-popup").addEventListener("click", closePopup);
    }