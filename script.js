var card = document.getElementById("cardContainer")
var p = fetch("https://api.memegen.link/images")
p.then((response) => {
  return response.json()
}).then((value) => {
  var c = 0;
  for (item in value) {
    c++;
    console.log(value[item].url)
    card.innerHTML = card.innerHTML + `<div class="card" id='eachitem' style="width: 18rem;">
      <img src="${value[item].url}" id='meme' class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Meme Number ${c}</h5>
      </div>
    </div>`
  }
})
