export const SearchReasultComponent = {
  bindings: {
    recipes: '<',
    navigateToDetail: '<',
  },
  template: `
    <div class="recipe-list" ng-show="$ctrl.recipes.length">
      <md-card class="recipe-card"
        ng-click="$ctrl.navigateToDetail(recipe)"
        ng-repeat="recipe in $ctrl.recipes">
        <md-card-header>
          <md-card-header-text>
            <h3 class="md-title" style="margin: 0.5em 0">{{recipe.label}}</h3>
            <span class="md-subhead">{{recipe.source}}</span>
          </md-card-header-text>
        </md-card-header>
        
        <img md-card-image src="{{recipe.image}}">
        <md-card-content style="display: flex; flex-flow: row wrap">
          <span ng-repeat="label in recipe.healthLabels"
            style="background:#f0f0f0; padding: 0.5em; margin: 0.25em; border-radius: 1em; font-size: 0.75em">
            {{label}}
          </span>
        </md-card-content>
      </md-card>
    </div>
  `
}