const API_key = `85da8bb7c062bcd08e1407eb05b332b2` ; 

const searchTemperature = () => {
    const searchInput = document.getElementById('searchinput').value ;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}


const setLocation = (id , text) => {
    document.getElementById(id).innerText = text ; 

}

const setTemperature = (id , text) =>{
    document.getElementById(id).innerText = text ; 
}

const setCloud = (id , text) =>{
    document.getElementById(id).innerText = text ; 
}

// const setImg = (id , url) =>{
//     document.getElementById(id).setAttribute('src' , url)
// }
const displayWeather = data =>{

    setLocation('city' , data.name) 
    setTemperature('temp' , data.main.temp)
    setCloud('cloud' , data.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
    document.getElementById('imgicon').setAttribute('src' , url) ; 
}


