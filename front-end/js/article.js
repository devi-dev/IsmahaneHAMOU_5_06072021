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
        document.querySelector(".container").innerHTML +=  `<div class="card bgprimary article-card style="width:25rem">
                                                            <img class="card-img-top article-img-top img-fluid" style= "width:100%;height:auto" src="${article.imageUrl}" alt="teddies" title=""/> 
                                                            <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}€</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label> <br/>
                                                                <select name="colors" id="colors-selection" required>;`
                                                                //get colors from article.colors with a loop
                                                                for (let color of article.colors){
          document.querySelector("#colors-selection").innerHTML +=`<option value=${color} required" id="colors">${color}</option>` 
                                                                };
              document.querySelector(".card-body").innerHTML +=`</select></br></br>
                                                                <label for="quantity">Quantité souhaitée:</label><br/>
                                                                <select name="quantity" id="quantity-selection">
                                                                    <option value="1" selected="selected">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                                <div class="card-text description">${article.description}</div><br/>
                                                                <div class="text-center">
                                                                  <button id="add-cart-btn" class="add-cart actionbtn text-center" type="submit">Ajouter au Panier</button>
                                                                </div>
                                                                <div id="overlay" class="overlay">  
                                                                    <div class="popup">
                                                                        <p id="btn-close-popup" class="btn-close-popup">&times;</p> 
                                                                        <h3 class="popup-title">Votre article a été ajouté au panier</h3>
                                                                        <p class="popup-text">Que souhaitez vous faire?</p>
                                                                        <button class="popup-btn-acceuil btn bgsecondary"><a href = index.html>Revenir à l'acceuil</a></button>
                                                                        <button class="popup-btn-panier btn bgsecondary"><a href = shoppingcart.html>Voir le panier</a></button>
                                                                    </div>
                                                                </div>                                                            
                                                            </div>
                                                        </div>`
                                                        
      
 
    // get color selected if undefined set a default value
    function showcolor(){
      let getColorSelected = document.querySelector("#colors-selection").value; //get color selected value
      console.log(getColorSelected)
      if(getColorSelected == null || getColorSelected == undefined){ //set default value if user don't choose the color
        return selectedArticle[0]
      } else {
        selectedArticle["selectedColor"]=getColorSelected;
        console.log(selectedArticle)
      }
    }         
    // get quantity selected if undefined set a default value  
    function showquantity(){
      let getQuantitySelected = document.querySelector("#quantity-selection").value;
      console.log(getQuantitySelected)
      if(getQuantitySelected == null || getQuantitySelected == undefined){//set default value if user don't choose the quantity
        return getQuantitySelected = 1
      } else {  
        selectedArticle["selectedQuantity"]=getQuantitySelected;//return quantity selected from object article
        console.log(selectedArticle)
      }
    }
          
    const btnAddCart = document.getElementById("add-cart-btn");//btn "ajouter au panier"
   //add event listener onclick :
    btnAddCart.addEventListener("click",function(){
      let getArticle = JSON.parse(localStorage.getItem("article"));//create a variable getArticle which get article info from localestorage and we need to parse it because localestorage data are in JSON so to convert it to javascript we use JSON.parse
      showcolor()//get color selected
      showquantity() //get quantity selected   
      if (getArticle != null && getArticle != undefined){//if locale storage is not empty, add the selected article to existing article in localestorage 
      getArticle.push(selectedArticle)
      localStorage.setItem("article",JSON.stringify(getArticle)); //create localestorage and convert getArticle data in JSON before stock selected items 
      }else{ // if locale storage is empty, set an array called panier and add to this array the selected article before stocking data in localestorage
        let panier = [];
        panier.push(selectedArticle)
        localStorage.setItem("article",JSON.stringify(panier));
      }
      console.log(selectedArticle);
      
      let overlay = document.querySelector("#overlay")//show popup when user click on cart btn
      overlay.style.display = "block";
      document.querySelector("#btn-close-popup").addEventListener("click", closePopup);//close popup cross btn user click on cart btn
    }); 
    function closePopup(){
      overlay.style.display = "none";
    }
  })

  //catch error from the request
  .catch(console.error);

  
   
    
