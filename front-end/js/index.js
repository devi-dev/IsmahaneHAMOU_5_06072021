fetch("http://localhost:3000/api/teddies")
  .then(function(response) {
    if (response.ok){
    return response.json()}
    else{
      console.error("retour du serveur: ", response.status)
    }
  })
  .then(function (listOfProducts) {
    console.log(listOfProducts)
    class teddy{
      constructor ()
    }
    for(let products of listOfProducts){
      let productTeddy = new teddy(products);
    }
  })
  .catch(console.error);