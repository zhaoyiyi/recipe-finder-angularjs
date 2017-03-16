import './style.css';
import 'angular-material/angular-material.css';
import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material'
import 'angular-ui-router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { SearchComponent, SearchBarComponent, SearchReasultComponent } from './search';
import { DetailComponent } from './detail';
import { RecipeService } from './recipe.service';


angular.module('app', ['ngMaterial', 'ui.router'])
  .component('app', AppComponent)
  .component('search', SearchComponent)
  .component('searchBar', SearchBarComponent)
  .component('searchResult', SearchReasultComponent)

  .component('detail', DetailComponent)
  .service('RecipeService', RecipeService)
  .config(routes)