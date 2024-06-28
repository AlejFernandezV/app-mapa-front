# Angular Map Marker Application
This project is an Angular application that displays markers on a Google map. Users can interact with the map to add, update, and delete markers. The application uses a Spring Boot backend to persist marker data. was generated with 

## Prerequisites

> [!NOTE]
> The application will not work unless the backend is running locally, because for various reasons the backend could not be deployed. You can go to this [link](https://github.com/AlejFernandezV/map-app-back) to find the repository and follow the steps in the repository's README.

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5. installed
- A running instance of the Spring Boot API (see the backend repository for setup instructions)

## Getting Started

### Clone the Repository

Clone the project repository to your local machine:

```sh
git clone https://github.com/AlejFernandezV/map-app-front.git
cd map-app-front
```

### Install dependencies

Install the project dependencies using npm:

```sh
npm install
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
