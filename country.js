function loadCountry (){

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

loadCountry();

function displayCountry(data){
    const Countries = document.getElementById('country');
    for (const country of data){

        const div = document.createElement('div');
        div.classList.add('shape');
        div.innerHTML = `<h3>${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick="loadCountryDetail('${country.name}')">Details</button>`
        Countries.appendChild(div)
    }
}


const loadCountryDetail = (countryName) =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch ( url )
    .then(res => res.json())
    .then(data => displayCountryDetail(data))

}


const displayCountryDetail = (data) => {
console.log(data);
const countryDetail = document.getElementById('countrydetail')
const div = document.createElement('div')
div.innerHTML = `<h2>Country Name: ${data[0].name}</h2>
                <p>Country Capital: ${data[0].capital}</p>
                <p>Country Population: ${data[0].population}</p>
                <p>Country Currencies: ${data[0].currencies[0].name}</p>
                <img width = "200px" src = "${data[0].flag}">
                `
countryDetail.appendChild(div);
}