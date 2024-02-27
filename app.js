const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

// Function to get recipes
const fetchRecipes = async (query) => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response = await data.json();
    // console.log(response.meals);
    }
    // Function to fetch ingredients and measurement
    const fetchIngredients = (meal) => {
        let ingredientsList = "";
        for (let i=1; i<=20; i++){
            const ingredients = meal[`strIngredient${i}`];
            if(ingredients){
                const measure = meal[`strMeasure${i}`];
                ingredientsList += `<li>${measure} ${ingredients}</li>`
            }
            else{
                break;
            }
            return ingredientsList;
            }
            }
        
    
    const openRecipePopup = (meal) => {
        recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingredents:</h3>
        <ul class="ingredientsList">${fetchIngredients(meal)}</ul>
        <div>
            <h3>Instruction:</h3>
            <p class="recipeInstruction">${meal.strInstruction}</p>
            </div>
        
        `
        
        recipeDetailsContent.parentElement.style.display = "block";
    }

recipeCloseBtn.addEventListener('click', ()=>{
    recipeDetailsContent.parentElement.style.display ="none";
});
    searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes (searchInput);
    // console.log("Button Clicked");
    });

