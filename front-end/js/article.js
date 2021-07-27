//find the article's id from the URL
const getParameters = window.location.search.replace("?","");

//request the article information with url parameter 
fetch(`http://localhost:3000/api/teddies/${getParameters}`)

  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })

  .then(function (article) {  
       console.log (article);
       //document.querySelector(".container").innerHTML 
       
        let html = `<div class="card bgprimary article-card">
                      <img class="card-img-top article-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                          <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label>
                                                                <select name="colors" id="colors-selection" onchange="showcolor()">
                                                                    <option value="">--Veuillez sélectionner une couleur--</option>`;
                                                                    
                                                                    for (let color of article.colors){
                                                                    html+=`<option value=${color} id="colors">${color}</option>`;
                                                                    }
                                                                                                                                       
                                                                html+=`</select> </br>
                                                                <select name="quantity" id="quantity-selection" onchange="showquantity()>
                                                                    <option value="label">--Quantité--</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>

                                                                </br></br>
                                                                <div class="card-text description">${article.description}</div>`
                                                                 html+=`<button onclick="setData()" class ="add-cart" type="submit">Ajouter au Panier </button>`                                                              
                                                            html+=`</div>
                                                         </div>`;
                                                        
                                                         document.querySelector(".container").innerHTML +=html;
   
  })
  .catch(console.error);

  //collecter les élements selectionnés et les stocker dans locale.storage
  
  
  function showcolor(){
        let getColorSelected = document.querySelector("#colors-selection").value;
        console.log(getColorSelected)
        localStorage.setItem("color", JSON.stringify(getColorSelected));
        console.log(localStorage.getItem("color"));
         }

    function showquantity(){
        let getQuantitySelected = document.querySelector("#quantity-selection").value;
        console.log(getQuantitySelected)
        localStorage.setItem(quantity,getQuantitySelected);
        }
