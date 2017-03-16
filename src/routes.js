export function routes($stateProvider) {
  const states = [
    { name: 'search', url: '/', component: 'search' },
    { name: 'detail', url: '/detail', component: 'detail' },
    { name: 'shoppingList', url: '/shopping-list', component: 'shoppingList' }
  ];
  
  states.map(state => $stateProvider.state(state));
  console.log('route');
}
