

// taking the input value from the search input field and pass it to a API dynamically 

const showPlayer = () => {
    
    const searchInput = document.getElementById('searchinput') ; 
    const searchInputValue = searchInput.value ; 
    searchInput.value = '' ;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchInputValue}` ; 
    fetch(url)
    .then ( res => res.json())
    .then (data => displayPlayer(data))

}

const displayPlayer = (data) => {
console.log(data);
const player = data.player ; 

const displayPlayer = document.getElementById('displayplayer');

const div = document.createElement('div');
div.classList.add('col');

div.innerHTML = `<div onclick = "displayPlayerDetail('${player[0].idPlayer}')"class="card">
<img src="${player[0].strThumb}" class="card-img-top"  alt="...">
<div class="card-body">
  <h5 class="card-title">${player[0].strPlayer}</h5>
  <p class="card-text">${player[0].strDescriptionEN.slice(0,150)}</p>
  <p class="card-text">${player[0].strTeam}</p>
  <p class="card-text">${player[0].strNationality}</p>
</div>
</div>`
displayPlayer.appendChild(div) ; 

}

const displayPlayerDetail = (idPlayer) => {

const url = `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idPlayer}`

fetch(url)
.then(res => res.json())
.then(data => showPlayerDetail(data))

}

const showPlayerDetail = (data) => {
    const player = data.players ;
    const showPLayer = document.getElementById('playerdetails')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = ` <img src="${player[0].strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${player[0].strBirthLocation}</p>
      
    </div>`
    showPLayer.appendChild(div)
}