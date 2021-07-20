fetch("http://localhost:3000/api/teddies")
  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })
  .then(function (listOfProducts) {  
    console.log (listOfProducts);  
    class articles {
      constructor(_id, colors, name, imageUrl, description, price){
        this._id = _id;
        this.colors = colors;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
      }
    }

    for (let article of listOfProducts) {
      document.querySelector(".listofarticles").innerHTML +=`  <div class="card bgprimary">
                                                            <a href=https://devi-dev.github.io/IsmahaneHAMOU_5_06072021/article.html?${article._id}>
                                                              <img class="card-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                              <div class="card-header bgsecondary">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                              </div>
                                                              <div class="card-body">
                                                                <div class="card-text description">${article.description}</div>
                                                              </div>
                                                            </a>
                                                          </div>`   

    }})
  .catch(console.error);