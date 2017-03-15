import './style.css';
import 'angular-material/angular-material.css';
import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material'
import { AppComponent } from './app.component';
import { SearchComponent, SearchBarComponent, SearchReasultComponent } from './search';
import { RecipeService } from './recipe.service';


angular.module('app', ['ngMaterial'])
  .component('app', AppComponent)
  .component('search', SearchComponent)
  .component('searchBar', SearchBarComponent)
  .component('searchResult', SearchReasultComponent)
  .service('RecipeService', RecipeService)