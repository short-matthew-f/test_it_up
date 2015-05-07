### NYC_WDI_30_ARCHER

# Homework

### First

Touch a file called `students.js` and link it to an HTML file called `index.html`.

Once you've linked your two files and included the above in `students.js`, make sure it works by including the following at the top of your `students.js` file and opening index.html in the browser

```js
console.log("files linked!");
```

### Then

We're going to take the following data and turn it into something more usable.

```js
var rawStudentData = "andrew-garver, anila-alexander, ben-sayeg, bryant-novas, dasha-murauyova, david-neuhaus, devatha-kesarkodigae, domenica-lalima, dor-rubin, fernanda-correa, gab-lubliner, gordon-dugan, james-kim, jeremy-bell, john-mcgillion, junho-rhee, karlyce-edwards, kelly-stevens, kelly-devine, mark-paulson, matt-sullivan, max-peterson, michael-dennis, orin-xie, teo-arana, bobby-king, ryan-burke, sam-hu"
```

Include the above at the top of `students.js`

Write a function that takes the raw string and returns an array of strings

```js
// example output
["andrew-garver", "anila-alexander"]
```

Then, write a function that takes that array and returns an array of student arrays

```js
// example output
[ ["andrew", "garver"], ["anila", "alexander"] ]
```
Then, write a function that takes that student array of arrays and makes the first character of each name uppercased.

> Try "hello".charAt(0).toUpperCase() or "hello"[0].toUpperCase() in the console. assign "hello" to a variable and try it in the console. did it change or mutate the value?

```js
// example output
[ ["Andrew", "Garver"], ["Anila", "Alexander"] ]
```

Then, write a function that takes that array and converts them into objects

```js
// example output
[
  { fName: "Andrew", lName: "Garver" },
  { fName: "Anila", lName: "Alexander" }
]
```

Then, write a function called `randomStudent` that returns a random student to call on.
