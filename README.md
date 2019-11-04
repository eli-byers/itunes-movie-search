# iTunes Movie Search

## Instructions

To view the app, install the dependancies and start the development server using the following commands.

```
npm install
npm start
```

## Extension Questions:

1. Pseudocode of search path

- User clicks search in NavBar component
- Event bubbles up to App component
- App makex a request to the API endpoint using Axios
- When the App gets a response the list of results is passed down to the Movies coponent
- Movies component handles pagination and sorting of results and displays them using MovieTable component
- MovieTable component handles table headers and displays data unsing the a common Table component

2. If I was going to put another week into this, I would have to ask and see what features people wanted to use.

3. Rough Time estination: 2 hours
