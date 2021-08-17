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
        document.querySelector(".container").innerHTML +=  `<div class="card bgprimary article-card">
                                                            <img class="card-img-top article-img-top" src="${article.imageUrl}" alt="teddies" title=""/> 
                                                            <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label> <br/>
                                                                <select name="colors" id="colors-selection" required>;`
                                                                //get colors from article.colors with a loop
                                                                for (let color of article.colors){
          document.querySelector("#colors-selection").innerHTML +=`<option value=${color} required" id="colors">${color}</option>` 
                                                                };
              document.querySelector(".card-body").innerHTML +=`</select></br></br>
                                                                <div class="card-text description">${article.description}</div>
                                                                <button id="add-cart-btn" class="add-cart" type="submit">Ajouter au Panier
                                                                </button>
                                                                <div id="overlay" class="overlay">  
                                                                    <div class="popup">
                                                                        <p id="btn-close-popup" class="btn-close-popup">&times;</p> 
                                                                        <h3 class="popup-title">Votre article a été ajouté au panier</h3>
                                                                        <p class="popup-text">Que souhaitez vous faire?</p>
                                                                        <button class="popup-btn-acceuil"><a href = index.html>Revenir à l'acceuil</a></button>
                                                                        <button class="popup-btn-panier"><a href = shoppingcart.html>Voir le panier</a></button>
                                                                    </div>
                                                                </div>                                                            
                                                            </div>
                                                        </div>`
                                                        
      
 
  // color selection shouldn't be send to the server 
  /*function showcolor(){
        let getColorSelected = document.querySelector("#colors-selection").value; //get color selected value
        console.log(getColorSelected)

         if(getColorSelected == null || getColorSelected == undefined){ //set default value if user didn't choose the color
           return selectedArticle[0]
          } else {
        selectedArticle["selectedColor"]=getColorSelected;
        console.log(selectedArticle)
         }}*/
             
    //store data in locale storage then get them in the shopping cart
    const btnAddCart = document.getElementById("add-cart-btn");
   
    btnAddCart.addEventListener("click",function(){
      let getArticle = JSON.parse(localStorage.getItem ("article"));
      
      if (getArticle != null && getArticle != undefined){
      getArticle.push(selectedArticle)
      localStorage.setItem("article",JSON.stringify(getArticle)); //collect selected items and stock them in the locale.storage
      }else{
        let panier = [];
        panier.push(selectedArticle)
        localStorage.setItem("article",JSON.stringify(panier));
       
      }
      console.log(selectedArticle);
      let overlay = document.querySelector("#overlay")
      overlay.style.display = "block";
      document.querySelector("#btn-close-popup").addEventListener("click", closePopup);
    }); 
    function closePopup(){
      overlay.style.display = "none";
    }
  })
  

  //catch error from the request
  .catch(console.error);

  
   
    
