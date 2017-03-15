export const SearchReasultComponent = {
  bindings: {
    recipes: '<',
    navigateToDetail: '<',
  },
  template: `
    <div class="recipe-list" ng-show="$ctrl.recipes.length">
      <p>test</p>
      <md-card class="recipe-card"
                ng-repeat="recipe in $ctrl.recipes">
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
  `
}