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

        document.querySelector(".container").innerHTML +=`<div class="card bgprimary">
                                                              <a href=https://devi-dev.github.io/IsmahaneHAMOU_5_06072021/article.html?${article._id}>
                                                                <img class="card-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                                  <div>
                                                                    <i class="far fa-heart fa-2x"></i>
                                                                    <i class="fas fa-heart fa-2x"></i>
                                                                   </div>
                                                                <div class="card-header bgsecondary">
                                                                  <h2 class="card-title">${article.name}</h2>
                                                                  <div class="card-text price">${article.price/ 100}.00 €</div>
                                                                </div>
                                                                <div class="card-body">
                                                                  <div class="card-text description">${article.description}</div>
                                                                </div>
                                                              </a>
                                                            </div>`   
    })

  .catch(console.error);



// comparer l'id de l'url avec celui requeter par l'api en utilisant switch

//console.log (idApi)