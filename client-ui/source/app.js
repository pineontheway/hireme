var moduleName = "webapp";

var dependencies =[
    "ui.router",
    "ui.bootstrap",
    "ngStorage",
    "angular-ladda",
    "ngTouch",
    "ngAnimate",
    "ngSanitize"
];

var module = angular.module(moduleName, dependencies);

(function () {
	bootstrapApp();

   function bootstrapApp() {
       angular.element(document).ready(function () {
           angular.bootstrap(document, [moduleName]);
       });
   }
 }());
