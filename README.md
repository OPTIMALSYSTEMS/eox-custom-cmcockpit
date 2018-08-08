# Chapter 4: Fetching and displaying Data
In this chapter we're going to fetch some data, and visualize them in a useful manner. Our context will be
a case management scenario. So let's start.


## Create Domain Model
To make our code maintainable, we will use model classes to structure the data used by the application.
So let's create a new file `src/app/model/case.model.ts` and define our model there. As we are going to create our 
models from a server response, we create a constructor that takes that response and maps it to our models structure.

## Fetching data
To get the data we need from enaio we'll use the provided search service. Using a simple query syntax we
are able to retrieve the data we need. In `app.component.ts` we add a `fetchData()` method that creates
the query.

```ts

const query = {
  fields: [
    'id',
    'title',  
    'description',  
    'created',  
    'eoxcase.eoxcaseid',  
    'eoxcase.type',  
    'eoxcase.eoxstatus',  
    'eoxcase.eoxprodcutline',  
    'eoxcase.eoxdatestart',  
    'eoxcase.eoxdateend'
  ],
  types: ['eoxcase']
}

```  

**Hint:** Consult REST API documentation for information on the type of objects and their fields.

## 
