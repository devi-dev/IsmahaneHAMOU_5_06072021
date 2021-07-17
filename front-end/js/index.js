fetch("http://localhost:3000/api/teddies")
  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })
  .then(function (listOfProducts) {  
    console.log (listOfProducts);  
    class article {
      constructor(id,colors, name, imageUrl, description, price){
        this.id = id;
        this.colors = colors;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
      }
    }
    
    for (let article of listOfProducts) {
      // let product = new article (articles) 
      document.querySelector(".container").innerHTML +=`<div class="card bgprimary">
                                                          <img class="card-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                          <div class="card-header bgsecondary">
                                                            <h2 class="card-title">${article.name}</h2>
                                                            <div class="card-text price">${article.price/ 100}.00 €</div>
                                                          </div>
                                                          <div class="card-body">
                                                            <div class="card-text description">${article.description}</div>
                                                          </div>
                                                        </div>`   

    }})
  .catch(console.error);