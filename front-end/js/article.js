//find the article's id from the URL
const getParameters = window.location.search.replace("?","");
//request the article information with the id gotten from the url parameter 
let selectedArticle="";// we want to use this variable globally and not only locally in the fonction (porté des variables :quand elles dont dans une fonction leur portée ne s'applique que dans le fonction).

fetch(`http://localhost:3000/api/teddies/${getParameters}`)

  .then(function(response){ //request return a promess
    if (response.ok){
    return response.json() // convert promess in a json format
    }
  })

  .then(function (article) {  //get data from the promess
       console.log (article);
       selectedArticle = article;

//hydrate html with article informations
        let html = `<div class="card bgprimary article-card">
                      <img class="card-img-top article-img-top" src="${article.imageUrl}" alt="teddies" title=""/> 
                          <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label> <br/>
                                                                <select name="colors" id="colors-selection" required>`;
//get colors from the article data with a "for" loop    
                                                                    for (let color of article.colors){
                                                                    html+=`<option value=${color} required" id="colors">${color}</option>`;
                                                                    }
                                                                                                                                       
                                                         html+=`</select></br></br>
                                                                <label for="quantity">Quantité souhaitée:</label><br/>
                                                                <select name="quantity" id="quantity-selection">
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

  //catch error from the request
  .catch(console.error);

  
  //collect selected items and stock them in the locale.storage
  
 function showcolor(){
        let getColorSelected = document.querySelector("#colors-selection").value; //get color selected value
        console.log(getColorSelected)
         if(getColorSelected == null || getColorSelected == undefined){ //set default value if user didn't choose the color
           return selectedArticle[0]
          } else {
        selectedArticle["selectedColor"]=getColorSelected;
        console.log(selectedArticle)
         }}
         
         
    function showquantity(){
        let getQuantitySelected = document.querySelector("#quantity-selection").value;
        console.log(getQuantitySelected)
        if(getQuantitySelected == null || getQuantitySelected == undefined){
           return getQuantitySelected = 1
        } else {  
        selectedArticle["selectedQuantity"]=getQuantitySelected;
        console.log(selectedArticle)
         }}
    
    function setData(){
      showquantity();
      showcolor();
      let getArticle = JSON.parse(localStorage.getItem ("article"));
      if (getArticle != null && getArticle != undefined){
      getArticle.push(selectedArticle)
      localStorage.setItem("article",JSON.stringify(getArticle));
      }
      else{
        let panier = [];
        panier.push(selectedArticle)
        localStorage.setItem("article",JSON.stringify(panier));
      }
        console.log(selectedArticle);
        let overlay = document.querySelector("#overlay")
        overlay.style.display = "block";
        document.querySelector("#btn-close-popup").addEventListener("click", closePopup);
    }
    function closePopup(){
      overlay.style.display = "none";
    }
