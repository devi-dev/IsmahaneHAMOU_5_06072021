//find the article's id from the URL
const getParameters = window.location.search.replace("?","");

//request the article information with url parameter =_id
fetch(`http://localhost:3000/api/teddies/${getParameters}`)

  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })

  .then(function (article) {  
       console.log (article);

        document.querySelector(".container").innerHTML +=`<div class="card bgprimary article-card">
                                                            <img class="card-img-top article-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                            <div class="card-header bgsecondary article-card-header ">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                            </div>
                                                            <div class="card-body">
                                                                <label for="color-select">Choisissez la couleur de votre ours en peluche:</label>
                                                                <select name="colors" id="colors-select">
                                                                    <option value="">--Veuillez sélectionner une couleur--</option>
                                                                    <option value="colors">${article.colors[0]}</option>
                                                                    <option value="colors">${article.colors[1]}</option>
                                                                    <option value="colors">${article.colors[2]}</option>
                                                                    <option value="colors">${article.colors[3]}</option>
  
                                                                </select></br>
                                                                <select name="quantité" id="quantity-select">
                                                                    <option value="">--Quantité--</option>
                                                                    <option value="qty">1</option>
                                                                    <option value="qty">2</option>
                                                                    <option value="qty">3</option>
                                                                    <option value="qty">4</option>
                                                                    <option value="qty">5</option>
                                                                    <option value="qty">6</option>
                                                                    <option value="qty">7</option>
                                                                    <option value="qty">8</option>
                                                                    <option value="qty">9</option>
                                                                    <option value="qty">10</option>
                                                                </select>
                                                                </br></br>
                                                                <div class="card-text description" type="submit">${article.description}</div>
                                                                <button class="add to cart">Ajouter au Panier</button>
                                                                
                                                            </div>
                                                         </div>`   
    })

  .catch(console.error);