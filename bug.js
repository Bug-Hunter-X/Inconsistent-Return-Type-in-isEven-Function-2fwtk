```javascript
function checkIfEven(number) {
  if (number % 2 === 0) {
    return true; // Correctly identifies even numbers
  } else {
    return 'odd'; // Incorrectly returns a string instead of false
  }
}
```