export const AppComponent = {
  template: `
    <a ui-sref="search" ui-sref-active="active">Search</a>
    <a ui-sref="shoppingList" ui-sref-active="active">Shopping List</a>
    <div ui-view></div>
  `
}