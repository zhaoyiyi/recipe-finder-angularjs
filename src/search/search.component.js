class SearchController {

  constructor(recipeService) {
    this.recipeService = recipeService;
    this.state = recipeService.state;
  }

  $onInit = () => {
    console.log('search controller init', this);
    this.recipeService.getRecipe();
  }
  onSearch = (text) => {
    console.log('controller search');
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
      <search-bar 
        search="$ctrl.onSearch">
      </search-bar>

      <search-result 
        recipes="$ctrl.state.searchResult" 
        navigateToDetail="$ctrl.nativateToDetail">
      </search-result>
    </section>
  `,
}

