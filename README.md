# Chapter 3: Adding i18n
In this chapter we'll add different languages to our application. As you may remember, we set up
some i18n configuration in the first chapter while we were configuring `@eo-sdk/core`.

We added 2 files there, `en.json` and `de.json`. Guess what, those are the files that will hold our 
translations. The translated strings are stored as key/value pairs for each language.

```json
{
  "app.login.username": "Username"
}
```

## Use translations in our components
Everywhere in our application where we use strings that should be translated when changing the 
language we use the `translate` directive with the key, instead of the actual value.

```html
<label translate>app.login.username</label>
```

You may also use the provided translate pipe:
```html
<label>{{'app.login.username'|translate}}</label>
```

## Switching languages
After replacing all strings with their translations, we now need a way for the user to switch 
the language from `en` to `de` and vice versa.

So we create a new component for our language switch running `ng g c lang-switch`.

**NOTICE:** The applications language is also influenced by the settings of the logged in user.
As long as no user is logged in (login form) switching language will only apply to the app. 
When a user with a different client locale is logged in, behaviour differs. See `lang-switch.component.ts` 
for implementation details.

## What we got
After adding our new `lang-switch component` to our login screen and to our application bar, we
are now able to switch the apps language anywhere. We also provided translations for all visible 
strings in our UI.

## What's next
Everything is prepared and looking nice. So we can continue adding the apps
core functionality. Therefore we'll fetch data from the backend and visualize
them in a nice way using charts.
