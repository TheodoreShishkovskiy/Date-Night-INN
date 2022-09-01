var typeofFood = document.querySelector("#cuisineStyle")
var searchbtn = document.querySelector(".searchbtn btn")
var alcohol = document.querySelector("#alcohol")
var flavor = document.querySelector("#flavor")

//  searchbtn.addEventListener("click", function(event){
       var requestURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+ alcohol.value;
       var foodURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + typeofFood.value;
//       console.log(requestURL)
//       fetch(requestURL)
//         .then(function(response) {
//           return response.json();
//         })
//         .then(function(data) {
//           console.log(data);
//         })
//   })
  

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
   var flavorDropdown = $("#flavor");
   var drinkDropdown = $("#drink");
    // result fields
   var drinkName = $("#name-text");
   var drinkImage = $("#drink-image");
   var drinkIngredients = $("#ingredients-text");
   var alcoholTypes = $("#alcohol-text");
  
    // API calls
    
    // searchbtn.addEventListener("click", function(event)){

    fetch(requestURL)
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              console.log(data);
    
            })
            
    fetch(foodURL)
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              console.log(data);
    
            })

          // }
    // API call to get rum picture
    function rumPicture() {
      $.ajax({
        url: "https://rum.ceo/api/drinks/image/random",
        method: "GET",
      }).then(function (response) {
        drinkImage.attr("src", response.message);
      });
    }
  
    // API call to get the tequila picture
    function tequilaPicture() {
      var src;
      var url =
        "www.thecocktaildb.com/api/json/v1/1/";
      $.getJSON(url + "&format=json&jsoncallback=?", function (data) {
        // /images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)
       var item =
          data.photos.photo[
            Math.floor(Math.random() * Object.keys(data.photos.photo).length)
          ];
       
        drinkImage.attr("src", src);
      });
    }
  
    // API call to get vodka picture
    function vodkaPicture() {
      $.ajax({
        url: "https://api.thevodkaapi.com/v1/images/search",
        method: "GET",
      }).then(function (response) {
        //response is an array - need to grab the URL value
        drinkImage.attr("src", response[0].url);
      });
    }
    // End API calls
  
    // function to populate the picture based on drink selection
    function setPicture() {
      if (drinkDropdown.val() === "vodka") {
        vodkaPicture();
      } else if (drinkDropdown.val() === "tequila") {
        tequilaPicture();
      } else if (drinkDropdown.val() === "rum") {
        rumPicture();
      } else if (drinkDropdown.val() === "whiskey") {
        // this link auto-selects a picture
        drinkImage.attr("src", "htpp://www.thecocktaildb.com/api/json/v1/1/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)");
      }
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
     var alcoholIngedrients = [
        // drink ingredients pulled from request
      ];
      // Pick Random Names
     var randomAlchoholTypes =
        alchoholTypes[Math.floor(Math.random() * alchoholTypes.length)];
     var randomAlcoholIngredients = alcoholIngredients[Math.floor(Math.random() * alcoholIngredients.length)];
  
      // Random flavor if needed
     var flavorOptions = ["strawberry", "peach", "apple", "tea", "daiquiri", "margarita", "mojito", "sour", "sweet", "kiwi", "lemon"];
     var randomflavorOption =
        flavorOptions[Math.floor(Math.random() * flavorOptions.length)];
      // Get flavor selection
     var flavorOption =
        flavorDropdown.val() === "surprise" ? randomflavorOption : flavorDropdown.val();
  
    
      // Random Meal Generator
      // Meal Array
     var mealSuggetions = ["pasta", "soup", "beef","chicken", "seafood", "steak","salad", "Vegetarian", "Vegan", "Jamaican", "Tacos", "Breakfast"
      //  possible meal options
      ];
      // Pick meal 
     var randomMeal = Meal[Math.floor(Math.random() * Meal.length)];
  
      // Text mappings & Picture
      // Set picture
      setPicture();
      // Map name and flavor to #name-text
      drinkName.text(`${randomalchoholTypes} ${randomalcoholIngredients}, ${flavorOption}`);
      // Map drink to #drink-text - upper case firstvarter
      drinkdrink.text(
        drinkDropdown.val().substr(0, 1).toUpperCase() +
          drinkDropdown.val().substr(1)
      );
      
      // Map to Meal to #alcohol-text - upper case firstvarter
      alcoholTypes.text(randomMeal.substr(0, 1).toUpperCase() + randomMeal.substr(1));
    }
  
    // listen for search click to populate the picture?
    $(".btn").on("click", function (event) {
      event.preventDefault();
      // generate drink profile
      generatedrinkDetails();
      // hide search
      $("#searchcontainer").hide();
      // shows result
      $("#result").css("display", "block");
      
    });

    $("form.search-form").on("submit", function (event) {
      event.preventDefault();

    });
  });
