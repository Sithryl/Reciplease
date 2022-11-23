var userInput = document.getElementById('userInput').value
var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}";

function getApi() {
    let requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
    fetch(requestUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var drinksArray = [data.drinks[0], data.drinks[1], data.drinks[2], data.drinks[3], data.drinks[4]]
            for (var i = 0; i < drinksArray.length; i++) {
                console.log(drinksArray)
                var drinkTitle = drinksArray[i].strDrink;
                // var drinkPic = drinksArray[i].strDrinkThumb;
                var drinkIng = drinksArray[i].strIngredient + j;
                var drinkIns = drinksArray[i].strInstructions
                var div = document.createElement('div');
                var drinkTitle = document.createElement('li');
                var drinkPic = document.createElement('li');
                var liRecipeId = document.createElement('li');
                liRecipeTitle.textContent = recipeTitle
                liRecipePic.textContent = recipePic
                liRecipeId.textContent = recipeId
                div.append(liRecipeTitle, liRecipePic, liRecipeId)
                searchResultContainer.append(div)
                
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    
                }}
            });
}
getApi();






