fetch("http://localhost:3000/api/teddies/_id}")
  .then(function(response){
    if (response.ok){
    return response.json()
    }
  })
  .then(function (Product) {  
    console.log (Product); 