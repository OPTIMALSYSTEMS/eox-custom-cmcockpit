# Chapter 2: Adding a CSS framework
Now that we have our application set up and enabled to connect to an enaio backend, we'll add a CSS framework
that saves us time for styling components.

## Install Bulma
We are going to use [Bulma](https://bulma.io/) as our CSS framework of choice. In contrast to other well known frameworks like Bootstrap 
or Semantic UI, it simple to use and easy to integrate and fits nicely into our projects SASS environment.

But of course you can use any of your favorites CSS frameworks as well.

Run `npm i bulma --save-dev` to install `Bulma` as a dev dependency. Because we are going to compile the final css 
files from Bulma SASS sources, we don't need it to be packaged with our application.
