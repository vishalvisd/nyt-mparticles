![enter image description here](https://img.shields.io/badge/Coverage-94%25-brightgreen)  
---  
|Description| Command | Remark |  
|--|--|--|  
|Install Dependencies | npm i| Use --force if Required (Since React 18 as dependency but some package still required React ^17.x |  
|Dev Server  | npm start | Use Only while doing development. Use `npm run prod` (to simulate production mode) when reviewing application for feedback. |  
|Build Production| npm run build||  
|Run Build Production | npm run prod| Runs a file server on the 'dist' folder|  
|Testing | npm run test | Runs both test and generate coverage report. [vitest](https://vitest.dev/) framework used.   
| | npm run onlytest | Runs only test   
----  
  
Highlights 
------- 
- Offline mode: Provides user with cached data when the internet connection is not reliable or unavailable.    
  It implements Cache then Network strategy with service worker (Show cached Data and then update when network data available.)   
- Data Fetching - RTK Query used which simplify loading of data,  and eliminate hand-write data fetching & caching logic.  
- Responsive UI    
- Unit Tests with code coverage   
- TypeScripts used in the main codebase while javascript used for testing code    
- SPA PWA  
- Latest Tech used:     
  - BoilerPlate: Vite    
  - Testing tools: vitest, react-testing-library     
  - API Query: Redux Toolkit RTK Query    
  - Service worker    
  - UI: MaterialUI    
  - Styling: Styled Components    
  - DateTime: date-fns    
  - React 18  
  
  
Todos  
---  
- Let user provide the API key or get it from vault  
- Instead of redirecting to the actual article, first show some details within the application and then let user choose if they want to read the main article.  
- Instead of dynamic caching everything use route based more appropriate caching  
- Add functionality to sort articles by user choice  
- SSR and template based rendering  
  
  
Lighthouse Report :-  
---  
| Desktop | Mobile |
|--|--|
| <img width="380" alt="image" src="https://user-images.githubusercontent.com/2000235/163588087-2af3749f-1ba0-464e-bd7d-4be5b5d3157c.png"> | <img width="380" alt="image" src="https://user-images.githubusercontent.com/2000235/163588258-e4ab0e75-231c-4fac-b7a8-6b283e981128.png">