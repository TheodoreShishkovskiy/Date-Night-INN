var typeofFood = document.querySelector("#cuisineStyle")
var searchbtn = document.querySelector(".searchbtn btn")
var alcohol = document.querySelector("#alcohol")
var flavor = document.querySelector("#flavor")
      
      $(document).ready(function () {
  //display script 
  // input questions and options on search page
  $("select").attr("class", "browser-default");
  // mobile collapse nav bar on result page
  $(".sidenav").sidenav();
  // hide result page
  $("#result").css("display", "none");
  
  // page variables
  // drop-downs
  var flavorDropdown = $("#drinkrecipe");
  var drinkDropdown = $("#alcohol");
  // result fields
  var drinkRecipe = $("#drink-recipe");
  var foodRecipe = $("#food-recipe");
  var mealImage = $("#meal-image");
  var drinkName = $("#name-text");
  var drinkImage = $("#drink-image");
  var drinkIngredients = $("#ingredients-text");
  var alcoholTypes = $("#alcohol-text");
 
  // function to populate the picture based on drink selection
  function setPicture(drinkPic) {
    // if (drinkDropdown.val() === "vodka") {
    //   vodkaPicture();
    // } else if (drinkDropdown.val() === "tequila") {
    //   tequilaPicture();
    // } else if (drinkDropdown.val() === "rum") {
    //   rumPicture();
    // } else if (drinkDropdown.val() === "whiskey") {
    //   // this link auto-selects a picture
    drinkImage.attr("src", "https://www.thecocktaildb.com/images/ingredients/" + drinkPic + "-Small.png", "https://www.thecocktaildb.com/api/json/v1/1/.php");
  }
  function foodImage(foodPic) {
    mealImage.attr("src", "https://www.themealdb.com/images/ingredients/" + foodPic + "-Small.png");
  }
  function displayRecipe(drink) {
    flavorDropdown.attr("src", "www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink);
  }
  function displayFoodRecipe() {
    foodRecipe.attr(mealIngredients.textContent);
  }
  // Function to generate drink details
  function generatedrinkDetails() {
    // Random Name Generator
    // Name Arrays
    var alcoholTypes = [
      "vodka",
      "whiskey",
      "tequila",
      "rum",
      "scotch",
      "gin",
      "bourbon",
      "cognac"
    ];
    var alcoholIngedrients = [""
      // drink ingredients pulled from request
    ];
    // Random Meal Generator
    // Meal Array
    var meal = ["pasta", "soup", "beef", "chicken", "seafood", "steak", "salad", "Vegetarian", "Vegan", "Jamaican", "Tacos", "Breakfast"
      //  possible meal options
    ];
    // Pick meal 
    var randomMeal = meal[Math.floor(Math.random() * meal.length)];
 
  }
  function getIngredients(obj){
    return Object
      .keys(obj)
      .filter(key=>key.includes("Ingredient"))
      .map(ingredient=>obj[ingredient])
      .filter(ingredient=>ingredient);
  }
  function getDrinkIngredients(obj){
    return Object
      .keys(obj)
      .filter(key=>key.includes("Ingredient"))
      .map(ingredient=>obj[ingredient])
      .filter(ingredient=>ingredient);
  }
  
  // listen for search click to populate the picture?
  $(".searchBtn").on("click", function (event) {
    event.preventDefault();
    var drinkSelection = $("#alcohol").val();
    var drinkRecipe = $("#flavors").val();
    var foodSelection = $("#cuisineStyle").val();
    var flavors = $("#flavor").val();
    var requestURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?c=' + flavors;
    var foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + foodSelection;
    var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    var ingredientUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    var drinkIngredientsUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    console.log(foodURL)
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
    fetch(foodURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var meals = data.meals;
        console.log(meals);
        fetch(ingredientUrl+meals[0].idMeal)
          .then(function (response){
            return response.json();
          })
          .then(function(data){
            console.log("Meal Ingredients:",data);
            var meal = data.meals[0];
            var mealIngredients = getIngredients(meal);
            console.log(mealIngredients);
          })
      })
    fetch(drinkURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var drinks = data.drinks;
        console.log(drinks);
        fetch(drinkIngredientsUrl+drinks[0].iddrinks)
          .then(function (response){
            return response.json();
          })
          .then(function(data){
            console.log("Drink Ingredients:",data);
            var drink = data.drinks[0];
            var drinkIngredients = getDrinkIngredients(drink);
            console.log(drinkIngredients);
          })
      })
    // generate drink profile
    generatedrinkDetails();
    // hide search
    $("#searchcontainer").hide();
    // shows result
    $("#result").css("display", "block");
    setPicture(drinkSelection);
    foodImage(foodSelection);
    displayRecipe(drinkRecipe);
    //displayFoodRecipe();
   // setPicture(drinkRecipe);
  });
  $("form.search-form").on("submit", function (event) {
    event.preventDefault();
  });
});
white_check_mark
eyes
raised_hands











