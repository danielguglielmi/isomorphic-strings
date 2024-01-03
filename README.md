# Isomorphic Strings
---

### Install dependencies
```sh
> npm install
```

### Run the test
```sh
npm run test
```

Example of expected result in the console:


### Running manually
We can add the following code within the `main.js` file: 

```js
const verify = () => {
  if (process.argv.length < 4) {
    console.log("Missing arguments, expected 2 arguments");
    process.exit(1);
  }
  return (
    checkIsomorphic(process.argv[2], process.argv[3]) &&
    checkIsomorphic(process.argv[3], process.argv[2])
  );
};
console.log(verify())
```

and then, we can run the project from the Terminal like so:
```sh
node main.js bar foo
node main.js add egg
```
This way you can run the project manually.

---

### Error Handling
If you add that function in the `main.js` file, tests may not run correctly. In case you receive an error when running the tests, please, verify that this function is not included in the `main.js` file, since the example described above is only for manual testing of the functionality.

