import * as bbSky from 'blackbaud-skyux';
import '../../node_modules/blackbaud-skyux/dist/css/libs.css';
import '../../node_modules/blackbaud-skyux/dist/css/sky.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';


angular.module('app', [
    'ui.router',
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
