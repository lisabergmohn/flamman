import { fetchApi } from './modules/recipes.js';
import { fetchFire } from './modules/fires.js';

document.addEventListener('DOMContentLoaded', function () {

    //eventlistener searching for random recipe
    const btn = document.getElementById('submit-recipes');
    const dataRec = document.getElementById('td');

    btn.addEventListener('click', function (event) {
        event.preventDefault();

        const searchValue = document.getElementById('search-field').value.trim();
        const searchForm = document.querySelector('.search');
        
        //to remove the searchform from when there is a result
        searchForm.classList.remove('visible');
        
        //check each search: more than 1 in length OR includes the 
        //fooddata from recipes
        if (searchValue.length > 1 || searchValue.includes(dataRec)) {
            fetchApi(searchValue);
        } else {
            console.log(!searchValue);
            alert('First, let the dinner roulette pick your food!');
            searchForm.classList.add('visible'); 
        }


        //clear search field
        document.getElementById('search-field').value = '';
        
               //hide form after dinner roulette
               function hideForm() {
                if(searchForm) {
                    searchForm.classList.add('hidden');
                }
            }
            
            hideForm();
    
        
    });

    fetchFire();

});

