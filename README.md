Intall dependencies
----
npm install (use --force if required [React 18 used and some dependencies still require ^17.x])

Dev Server
-----
npm start

Build Production
----
npm run build 

Run - Build Production
----
npm run prod

Test
----
npm run test [both test and coverage results] <br />
npm run onlytest [only test]
 
Highlights
-------
- Offline mode: Provides user with cached data when the internet connection is not reliable or unavailable.
  <br /> It implements Cache then Network strategy using a service worker
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
    
