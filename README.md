# Chapter 2: Adding a CSS framework
Now that we have our application set up and enabled to connect to an enaio backend, we'll add a CSS framework
that saves us time for styling components.

## Install Bulma
We are going to use [Bulma](https://bulma.io/) as our CSS framework of choice. In contrast to other well known frameworks like Bootstrap 
or Semantic UI, it simple to use and easy to integrate and fits nicely into our projects SASS environment.

But you can also use any of your favorites CSS frameworks.

Run `npm i bulma --save-dev` to install `Bulma` as a dev dependency. Because we are going to compile the final css 
files from Bulma SASS sources, we don't need it to be packaged with our application.

We also create a `styles.vars.scss` that will be used to share SASS variables across the application.
Now import `styles.vars.scss` and Bulma into your applications `styles.scss`. 

Notice: We first import `styles.vars.scss`, then setup sass vars to override the ones used by Bulma to
match our styles, and then import Bulma. 


```scss
@import "styles.vars";

$primary: $accent-color;
$input-focus-border-color: $accent-color;

@import "../node_modules/bulma/bulma.sass";
```

Now we need to provide our templates with the Bulma classes syntax. In our case we e.g. add `class="input"` to our login forms 
input, hit save and watch our form getting pretty.


## Build basic application layout
Now we'll create the basic layout for our application. 

### app-bar.component
First step is to create a new `app-bar` component by running
`ng g c app-bar`. We move the subscription to the current user from `app.component.ts` to that component, so we can 
display the user image inside of the application bar.

### logo.component
Run `ng g c logo` to generate a new component for displaying our app logo. This logo component will
be used inside of our app bar and on the login screen and will use an SVG to be able to scale the logo. 

## What we got
We added a CSS framework and setup SASS to brand our application. All the components
are provided with basic styles.

## What's next
As we are going to target users in different countries, we'll continue adding different languages to our application.
