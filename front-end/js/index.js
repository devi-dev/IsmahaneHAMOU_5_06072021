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
      document.querySelector(".carte").innerHTML += `<img class="carte-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                    <div class="carte-body">
                                                      <h2 class="carte-title">${article.name}</h2>
                                                      <div class="carte-text description">${article.description}</div>
                                                      <div class="carte-text price">${article.price}</div>
                                                    </div>`;

    }})
  .catch(console.error);