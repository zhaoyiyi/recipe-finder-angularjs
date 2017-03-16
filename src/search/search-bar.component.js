export const SearchBarComponent = {
  bindings: {
    search: '<',
  },
  template: `
    <form ng-submit="$ctrl.search(searchText)">
      <md-input-container>
        <input mdInput placeholder="find recipe here..." ng-model="searchText">
      </md-input-container>
      <md-button class="md-raised" type="submit">Search</md-button>
    </form>
  `
};