// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('axios');
   





/*
1. npm install --save-dev jest @testing-library/react @testing-library/jest-dom
2. npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
3. created babel.config.js - added code manually and [added plugins if required ]
4. Added in package.json  [Not required]
   "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  },
If you're using Jest for testing, it should automatically pick up the babel-jest package and use it to transform your JavaScript and JSX code. 
However, if you're using a custom Jest configuration, you might need to ensure it uses Babel for transformations.
5. removed "eslintConfig":"react-app/jest"
6. Added jest.mock('axios'); in setupTests.js
7. axios and react-router-dom ka version downgraded to 
"react-router-dom": "^6.28.0",
"axios": "^0.21.1"




npx jest --clearCache - to clear caching data
*/
