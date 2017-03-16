class DetailController {
  constructor(recipeService) {
    this.recipeService = recipeService;
  }
}

DetailController.$inject = ['RecipeService'];

export const DetailComponent = {
  controller: DetailController,
  template:`
    detail page!
  `
};
