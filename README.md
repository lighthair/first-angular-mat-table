# HelloWorld

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.
It's a simple example showing a table with several columns.
The example uses the mat-table (from @angular/material) to format columns.

## Development server

Run `npm start` to start all necessary servers. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Start details:
npm start will:
* start a mongodb docker container called billie, using port 27017
* start the dbserver to get and put data from billie
* start angular with ng serve

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
