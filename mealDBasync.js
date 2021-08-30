
// try catch error element to show none when load the page 

document.getElementById('trycatcherror-custom').style.display = 'none';

// write async before the parameter of arrow function
const mealSearch = async () => {
    const mealInput = document.getElementById('mealinput');
    const mealInputValue = mealInput.value;
    mealInput.value = '';
    if (mealInputValue == '') {
        const showMeal = document.getElementById('showmeal');
        showMeal.textContent = '';
        const mealDetail = document.getElementById('mealdetails');
        mealDetail.textContent = '';
        document.getElementById('errorstring').innerText = 'Please Write Something to Search'

    }

    else {

        document.getElementById('errorstring').innerText = '';

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInputValue}`

        // write await before the fetch and res 
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayMeal(data);
        }

        catch (error) {

            document.getElementById('trycatcherror-custom').style.display = 'block';
            document.getElementById('trycatcherror-bydefault').innerText = `Error:${error}`

        }
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displayMeal(data))
    }


}

const displayMeal = (data) => {
    const meals = data.meals;

    if (meals == null) {
        const showMeal = document.getElementById('showmeal');
        showMeal.textContent = '';
        const mealDetail = document.getElementById('mealdetails');
        mealDetail.textContent = '';
        document.getElementById('errorstring').innerText = 'No food Found'
    }
    else {

        document.getElementById('errorstring').innerText = '';
        const showMeal = document.getElementById('showmeal');
        showMeal.textContent = '';
        const mealDetail = document.getElementById('mealdetails');
        mealDetail.textContent = '';
        for (const meal of meals) {

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div onclick="mealDetails('${meal.idMeal}')" class="card h-100">
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
</div>
</div>`;
            showMeal.appendChild(div);
        }
    }
}


// write async before the parameter of arrow function
const mealDetails = async (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`


    // write await before the fetch and res 
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data);
    // fetch (url)
    // .then(res => res.json())
    // .then(data => displayMealDetails(data))
}




const displayMealDetails = (data) => {
    const meal = data.meals;
    document.getElementById('errorstring').innerText = '';
    const mealDetail = document.getElementById('mealdetails');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` <img src="${meal[0].strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal[0].strMeal}</h5>
  <p class="card-text">${meal[0].strInstructions.slice(0, 100)}</p>
  <a href="${meal[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>`

    mealDetail.appendChild(div);





}
