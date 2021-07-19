
let url(`http://localhost:3000/api/teddies/${article._id}`)
  document.querySelector(".container").innerHTML +=`<div class="card bgprimary">
                                                            <a href=https://devi-dev.github.io/IsmahaneHAMOU_5_06072021/article.html?id=${article._id}>
                                                              <img class="card-img-top" src="${article.imageUrl}" alt="teddies" title=""/>
                                                              <div class="card-header bgsecondary">
                                                                <h2 class="card-title">${article.name}</h2>
                                                                <div class="card-text price">${article.price/ 100}.00 €</div>
                                                              </div>
                                                              <div class="card-body">
                                                                <div class="card-text description">${article.description}</div>
                                                              </div>
                                                            </a>
                                                          </div>` `