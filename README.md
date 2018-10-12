# CmCockpit

Case Management Cockpit is a sample application showing the use of `@eo-sdk/core` library.
This library was created to provide developers with an easy to use interface to access data
and functionality of an enaio backend.

## Requirements
For being able to follow this example you need to make sure that you installed the following 
tools in a recent version on your computer:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org) (which will install npm package manager as well)
- [Angular CLI](https://cli.angular.io/) (just run `npm i -g @angular/cli` after you installed npm)

## Setup
For setting up our new project we'll run `ng new cmCockpit --style=scss`. This will create a new Angular CLI project 
and install all dependencies. Take a look at [Angular CLI](https://cli.angular.io/) to learn more about 
project scaffolding using Angular CLI.

Open the project in your favorite IDE and run `npm i @eo-sdk/core` inside of your projects 
folder to install enaio sdk core library. 
  
## Dev Proxy
To be able to access an enaio backend system, we need to setup a proxy server that redirects
requests from our dev environment to enaio. 

You can install `npm i -g eo-client-proxy` to run the proxy from the command line. See 
[eo-client-proxy on npmjs](https://www.npmjs.com/package/eo-client-proxy) for information on
how to use the proxy.

We'll use another enaio dev tool instead, that wraps the `eo-client-proxy` to provide an easy
to use interface. It's called `enaio dev proxy` and you can download it here:
[ZIP file](https://files.optimal-systems.org/index.php/s/Me5TATrZiqneRtk/download) or 
[EXE file](https://files.optimal-systems.org/index.php/s/oeCSJQ4bR9H59qG/download)

To be able to proxy request we need to make some changes to our project. First we create a new 
file `proxy.config.js` in our projects root folder. After that we change the `start` script inside 
of our `package.json` to use this file when running the dev server.

```json  
  "scripts": {
    "start": "ng serve --proxy-config proxy.config.js"
  }
```

## Adding EoCoreModule to the application
Import `EoCoreModule` in your applications root NgModule.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EoCoreModule} from '@eo-sdk/core';

@NgModule({
    imports: [
        BrowserModule,
        EoCoreModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

By default `EoCoreModule` is set up with the following configuration

```json 
{
  "main": ["assets/_default/config/main.json"],
  "translations": ["assets/_default/i18n/"]
}
```

This tells the module where to find the main config file and where the
translations of your application can be found.

For this example we're going to use this defaults, so wee need to add those resources 
to our project:

- create `_defaults` folder inside projects `assets` folder. 
- create `i18n` and `config` folder inside `_default` folder. 
- add empty `de.json` and `en.json` file inside `i18n` folder
- add `main.json` file inside `config` folder

**Now we are ready to go!**

## Create login component
To be able to access data from enaio, we need the user to be logged in. So we create 
a login component first. This component will display a login form and handle 
authentication against our backend.

Run `ng generate component login`. This will create a new component and add it to 
your apps module. Check `src/app/login` for implementation details.

## What we got
Right now, we got a raw application that is capable of logging in (and logout) a user 
and display some information about the current user.

## What's next
Right now the app is looking pretty raw. So we're going to add a CSS framework to be
used along with our further development.
