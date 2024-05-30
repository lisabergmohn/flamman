//fetching api from the meal db

export async function fetchApi(searchValue) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response not OK');
        }

        const result = await response.json();

        getValue(result);
        return result;

    } catch (error) {
        console.error('Error fetching data: ', error);
        alert('Error getting recipes');
    }

}


function getValue(result) {
    if (!result || !result.meals || result.meals.length === 0) {
        console.error('No meals found.');
        return;
    }


    const mealValues = result.meals;
    console.log(mealValues);

    //get a random recipe
    const randomIndex = Math.floor(Math.random() * mealValues.length);
    const randomMeal = mealValues[randomIndex];

    /* object */
    const foodData = {
        strMeal: randomMeal.strMeal, /* key value recipes */
        strLink: randomMeal.strSource,/* key value links */
        //mealImg: `https://www.themealdb.com/images/ingredients/${randomMeal.strCategory}-Small.png`, /* key value img hemska bilder */

    };

    writeOutMeals(foodData);

}

/* global scope */
let dataRecipes;
let formRecipe;

function writeOutMeals(foodData) {
    const dinnerTable = document.querySelector('.table-dinner');

    dataRecipes = document.createElement('td');
    //dinner presented in dinner roulette

    dataRecipes.innerHTML =
        `
                        <td><a href="${foodData.strLink}" target='_blank'>${foodData.strMeal}</a></td>
                        `;


    formRecipe = document.createElement('td');

    //dinner presnted in form
    formRecipe.innerHTML = `    
                            <td>Your adventure menu will be ${foodData.strMeal}</td>

                            `;


    dinnerTable.style.background = '#e7f0fe';


    //OBS! jag plockade bort bilden från varje söksvar för de såg ganska äckliga ut... 
    //nedan hur den såg ut initialt
    //<td><img src="${foodData.mealImg}" alt="${foodData.strMeal}"></td>//

    console.log(dataRecipes);
    document.getElementById('table-data').appendChild(dataRecipes);
    document.getElementById('table-meat').appendChild(formRecipe);

    return dataRecipes;

};



