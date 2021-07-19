fetch("http://localhost:3000/api/teddies/${article._id}")
  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })
  .then(function (articleinformation) {  
    console.log (articleinformation);  
    class articleinformation {
      constructor(_id, colors, name, imageUrl, description, price){
        this._id = _id;
        this.colors = colors;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
      }
    }
      document.querySelector(".container").innerHTML +=`  <div class="card bgprimary">
                                                              <img class="card-img-top" src="${imageUrl}" alt="teddies" title=""/>
                                                              <div class="card-header bgsecondary">
                                                                <h2 class="card-title">${name}</h2>
                                                                <div class="card-text price">${price/ 100}.00 €</div>
                                                              </div>
                                                              <div class="card-body">
                                                                <div class="card-text description">${description}</div>
                                                              </div>
                                                          </div>`   

    })
  .catch(console.error);