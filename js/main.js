import { fetchApi } from './modules/recipes.js';
import { fetchFire } from './modules/fires.js';

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('submit-recipes');
    const searchForm = document.querySelector('.search');
    const searchField = document.getElementById('search-field');
    const dataRec = document.getElementById('td');

    //eventlistener searching for random recipe
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        const searchValue = searchField.value.trim();

        //to remove the searchform when there is no result 
        //and user want to search once more
        searchForm.classList.remove('visible');

        //check each search: more than 1 in length OR includes the 
        //fooddata from recipes.
        //with error handling
        if (searchValue.length > 1 || searchValue.includes(dataRec)) {
            fetchApi(searchValue).catch(function (error) {
                console.error('Error fetching data: ', error);
                alert('Error when playing dinner roulett.');
            });
        } else {
            alert('First, let the dinner roulette pick your food!');
            searchForm.classList.add('visible');
        }

        //clear search field
        document.getElementById('search-field').value = '';

        //hide form after dinner roulette
        function hideForm() {
            if (searchForm) {
                searchForm.classList.add('hidden');
            }
        }

        hideForm();


    });

    //fetchfire api with error handling
    fetchFire().catch(function (error) {
        console.error('Error fetching data: ', error);
    });

});

