document.getElementById('quote-btn').addEventListener('click', function () {

    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))

})


const displayQuote = (data) => {
    
    document.getElementById('quote').innerText = data.quote; 
}

