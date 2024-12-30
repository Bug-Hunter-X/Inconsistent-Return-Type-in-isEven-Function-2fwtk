# Inconsistent Return Type in isEven Function

This repository demonstrates a common error in JavaScript functions: inconsistent return types. The `checkIfEven` function is designed to check whether a number is even and return `true` if it is and `false` otherwise. However, it incorrectly returns the string `'odd'` when the number is odd, creating potential issues when working with the function's output.

The `bug.js` file contains the buggy code, and `bugSolution.js` presents the corrected version, ensuring a consistent boolean return type.