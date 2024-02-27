const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

// Function to get recipes
const fetchRecipes = async (query) => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response = await data.json();
    // console.log(response.meals);
    }
    searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes (searchInput);
    // console.log("Button Clicked");
    });

