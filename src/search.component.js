class SearchController {

  constructor(recipeService) {
    this.recipeService = recipeService;
    this.state = recipeService.state;
  }

  $onInit = () => {
    console.log('search controller init', this);
    this.recipeService.getRecipe();
  }
  search = (text) => {
    this.recipeService.getRecipe(text);
  }
  navigateToDetail = (recipe) => {
    this.recipeService.selectRecipe(recipe);
    this.router.navigate(['/recipe-detail']);
  }
}

SearchController.$inject = ['RecipeService'];

export const SearchComponent = {
  controller: SearchController,  
  template: `
    <section class="">
      <form ng-submit="$ctrl.search(searchText)">
        <md-input-container>
          <input mdInput placeholder="find recipe here..." ng-model="searchText">
        </md-input-container>
        <button md-raised-button type="submit">Search</button>
      </form>
    
      <div class="recipe-list" ng-if="$ctrl.state.searchResult.length">
        <p>test</p>
        <md-card class="recipe-card"
                 ng-repeat="recipe in $ctrl.state.searchResult">
          <md-card-header>
            <md-card-title>{{recipe.label}}</md-card-title>
            <md-card-subtitle>{{recipe.source}}</md-card-subtitle>
          </md-card-header>
          <img md-card-image src="{{recipe.image}}" ng-click="$ctrl.navigateToDetail(recipe)">
          <md-card-content>
            <md-chip-list>
              <md-chip ng-repeat="label in recipe.healthLabels">{{label}}</md-chip>
            </md-chip-list>
          </md-card-content>
        </md-card>
      </div>
    </section>
  `,
}

