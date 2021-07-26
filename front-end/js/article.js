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
                                                                <select name="colors" id="colors-select">
                                                                    <option value="">--Veuillez sélectionner une couleur--</option>`;
                                                                    for (let color of article.colors){
                                                                    html+=`<option value="colors">${color}</option>`;
                                                                    }
                                                                                                                                       
                                                                html+=`</select> </br>
                                                                <select name="quantité" id="quantity-select">
                                                                    <option value="">--Quantité--</option>
                                                                    <option value="qty">1</option>
                                                                    <option value="qty">2</option>
                                                                    <option value="qty">3</option>
                                                                    <option value="qty">4</option>
                                                                    <option value="qty">5</option>
                                                                </select>
                                                                </br></br>
                                                                <div class="card-text description" type="submit">${article.description}</div>
                                                                <button class="add to cart">Ajouter au Panier</button>
                                                                
                                                            </div>
                                                         </div>`;
                                                         document.querySelector(".container").innerHTML +=html;
   
  })
  .catch(console.error);
  
  let articleLocaleStorage = JSON.parse(localStorage.getItem("article"));
  console.log(articleLocaleStorage);