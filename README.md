
---
|Description| Command | Remark |
|--|--|--|
|Install Dependencies | npm i| Use --force if Required (Since React 18 as dependency but some package still required React ^17.x |
|Dev Server  | npm start | |
|Build Production| npm run build||
|Run Build Production | npm run prod| Runs a file server on the 'dist' folder|
|Testing | npm run test | Runs both test and generate coverage report. [vitest](https://vitest.dev/) framework used. 
| | npm run onlytest | Runs only test 
----

Highlights  
-------  
- Offline mode: Provides user with cached data when the internet connection is not reliable or unavailable.  
  It implements Cache then Network strategy caching with service worker  
- RTK Query used which provides additional layer of caching and   
less code with api hooks hence less maintainence and more robust code  
- Responsive UI  
- Unit Tests with code coverage [npm run test]  
- TypeScripts used in the main codebase while javascript used for testing code  
- Latest Tech used:   
  - BoilerPlate: Vite  
  - Testing tools: vitest, react-testing-library   
  - API Query: Redux Toolkit RTK Query  
  - Service worker  
  - UI: MaterialUI  
  - Styling: Styled Components  
  - DateTime: date-fns  
  - React 18
