function loadData(){

    
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayImage(data))
        
}    
        
function displayImage(data){
const image = document.getElementById('image');
    for (const img of data){
        const div = document.createElement('div')
        div.innerHTML = ` <h4>${img.title}</h4> <img src = '${img.url}'>` ; 
        image.appendChild(div); 
    }
}
        
        