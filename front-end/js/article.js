//find the article's id from the URL
const getParameters = window.location.search.replace("?","");
console.log (getParameters);

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


// comparer l'id de l'url avec celui requeter par l'api en utilisant switch
const idApi = articles._id;
console.log (idApi);
/
