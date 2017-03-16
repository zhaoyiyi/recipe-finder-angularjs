class SearchController {

  constructor(recipeService) {
    this.recipeService = recipeService;
    this.state = recipeService.state;
    console.log('search controller init');
  }

  $onInit = () => {
    console.log('search controller init', this);
    this.recipeService.getRecipe();
  }
  search = (text) => {
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
    <section>
      <search-bar 
        search="$ctrl.search">
      </search-bar>

      <search-result 
        recipes="$ctrl.state.searchResult" 
        navigateToDetail="$ctrl.nativateToDetail">
      </search-result>
    </section>

    <style>
      .recipe-list {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: space-around;
      }
      .recipe-card {
        width: 300px;
        margin: 0 1rem 1rem;
      }
      .recipe-card md-chip {
        margin: 0.25rem;
      }
      img:hover {
        cursor: pointer;
      }
      form {
        text-align: center;
        margin: 1rem;
      }
      .hint {
        color: grey;
        text-align: center;
      }
    </style>
  `,
}

