import './style.css';
import 'angular-material/angular-material.css';
import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material'
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { RecipeService } from './recipe.service';


angular.module('app', ['ngMaterial'])
  .component('app', AppComponent)
  .component('search', SearchComponent)
  .service('RecipeService', RecipeService)