//fetch data and transform jsonfile in data for js
fetch("http://localhost:3000/api/teddies")//request type GET

  .then(function(response){ ///return a promise
    if (response.ok){
    return response.json()// response is in JSON that return also a promise
    }
  })

  .then(function (listOfProducts) {  //return an object javascript
    console.log (listOfProducts); 

    //Hydrate page with the list of articles
    for (let article of listOfProducts) {
      document.querySelector(".listofarticles").innerHTML +=`<div class="card-index card bgprimary">
                                                              <a href=./article.html?${article._id}>
                                                                <img class="card-img-top img-fluid" style= "width:100%;height:auto"src="${article.imageUrl}" alt="teddies" title=""/>
                                                                <div class="card-header bgsecondary">
                                                                  <h2 class="card-title">${article.name}</h2>
                                                                  <div class="card-text price">${article.price/ 100}€</div>
                                                                </div>
                                                                <div class="card-body">
                                                                  <div class="card-text description">${article.description}</div>
                                                                </div>
                                                              </a>
                                                            </div>`   
    }
  })
  .catch(console.error);//deal with errors


