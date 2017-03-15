export const SearchBarComponent = {
  bindings: {
    search: '<',
  },
  template: `
    <form ng-submit="$ctrl.search(searchText)">
      <md-input-container>
        <input mdInput placeholder="find recipe here..." ng-model="searchText">
      </md-input-container>
      <button md-raised-button type="submit">Search</button>
    </form>
  `
};