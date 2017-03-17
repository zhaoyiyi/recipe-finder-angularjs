
const API_URL = 'https://api.edamam.com/search?app_id=fcfe9462&app_key=dc6cb1d3152df63f39cc2d023bbc20de&to=30';

export class RecipeService {

  state = {
    shoppingList: {},
    searchResult: [],
    currentRecipe: {},
  }

  constructor($http) { 
    this.$http = $http;
  }

  addToShoppingList(recipe, useAdjusted) {
    let ingredients = useAdjusted ? recipe.adjustedIngredients : recipe.ingredientLines;
    ingredients = ingredients.map(ingred => ({ name: ingred, isChecked: false }));

    this.shoppingList = Object.assign({}, this.shoppingList,
      {
        [recipe.url]: {
          label: recipe.label,
          ingredients,
          url: recipe.url
        }
      });
  }

  selectRecipe(recipe) {
    this.state.currentRecipe = recipe;
  }

  removeFromShoppingList(recipe) {
    delete this.shoppingList[recipe.url];
  }

  checkIngredient(recipe, ingredientName) {
    this.shoppingList[recipe.url].ingredients = this.shoppingList[recipe.url].ingredients
      .map(ingred => {
        if (ingred.name === ingredientName) {
          return {
            name: ingred.name,
            isChecked: !ingred.isChecked,
          };
        }
        return ingred;
      });
  }

  isInList(recipe) {
    return !!this.shoppingList[recipe.url];
  }

  updatePortion(recipe, portion) {
    const adjustedIngredients = recipe.perUnit.ingredients.map(ingred => this.updateIngredients(ingred, portion));
    this.currentRecipe.next(Object.assign({}, recipe, { portion }, { adjustedIngredients }));
  }

  getRecipe(text) {
    if (!text) return this.searchResult
    this.$http.get(`${API_URL}&q=${text}`)
      .then(res => {
        this.state.searchResult = res.data.hits.map(r => this.processData(r.recipe));
      })
  }

  getNutrientsValue(nutrients, portion) {
    const perUnitNutrient = {};
    Object.keys(nutrients).map(key => {
      perUnitNutrient[key] = Object.assign({}, nutrients[key], { quantity: nutrients[key].quantity * portion });
    });
    return perUnitNutrient;
  }

  updateIngredients(ingred, multiplier) {
    return ingred.replace(/\d+[./]?\d*/g, match => {
      if (match.includes('/')) {
        match = match.split('/').reduce((a, b) => (+a / +b).toString());
      }
      // round to 2 decimal places
      return (Math.round(+match * multiplier * 100) / 100).toString() || '';
      // it may become something like "0.5 0.25 cups of water", this line adds the two numbers up
    }).replace(/(\d+\.?\d+) (\d+\.?\d+)/g, (match, a, b) => (+a + +b).toString());
  }

  processData(recipe) {
    const portion = recipe.yield;
    // get per unit values
    const totalNutrients = this.getNutrientsValue(recipe.totalNutrients, 1 / portion);
    const totalDaily = this.getNutrientsValue(recipe.totalDaily, 1 / portion);
    const totalWeight = Math.round(recipe.totalWeight / portion);
    const ingredients = recipe.ingredientLines.map(ingred => this.updateIngredients(ingred, 1 / portion));

    return Object.assign({}, recipe, {
      perUnit: {
        totalNutrients,
        totalDaily,
        totalWeight,
        ingredients
      }
    }, { portion });
  }
}

RecipeService.$inject = ['$http']
