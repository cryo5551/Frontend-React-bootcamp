# Getting Started with Create React App


### Details of src directory


**Note: just like we have index.html for regular pages, for react application, the first file that needs to run should be App.js**

**App.js is the index.html for React Application.**
- we can suntomise the name and change it to anything instead of APP.js but we should not do it


- directorys in src
 - App.js - This is a component. This is the first component that is used in any react application.

 - App.css - This is the CSS for App component. 
   - That means, whatever HTML we write in app 

 - App.test.js - This is a sample Testcase that is for basic react webpage which is developed.

 - index.css - This contains the whole css of your website. If we write any CSS code here, it will be available througout the whole website.

 - index.js -This contaions the whole JS of your website. This also contains the initialization code for React.

 - logo.svg - This is the Rotating logo we see at start of the App.js.

 - reportWebVitals.js - This is feature developed by Google to cheak the health of your website.
 - setupTests.js - This file is used for setting up the testcases testing purposes.
  - we typically use JEST package for testing, this is very commomn.


### package.json 
- This contains information about the project we are working on.
- This contains the things like name, description, version, author, etc etc.
- This contains an object called dependencies: 
  - This contains a collection of all packages we are working with in our react application.
  - All the packages we have Installed.


- Suppose, I import a package called a packageA, It is possible that PackageA is using Other Packages as it's dependencie, PackageAA, packageAB, packageAC.
- So, when I am installing packageA, Indirectly I am also installing packageAA, packageAB, packageAC.
- In total we are Installing 4 packages.

- dewDependencies - This is the collection of packages which is used for development purpose.
 - this collection of packages is never pushed to the production server. 
 - which keeps the load comperatively light.

### package-lock.json
- This file contains all the additional (indirect) dependency installation.
- meaning all the packages that are helping in running the main packages.
- basically it contains dependencies of dependencies and thier full information like source link;


### Component 
- The React Applicatin can be broken down into various atomic parts, these are called components.
- A component is a JS file. Typically a function or a class.

## Component
- The React application can be broken down into various atomic parts. These atomic parts are called components.
- A component is a JS file. Typically a function or a class.
- This contains the HTML code along with it's relevant JS functionality and logic.
- Example, have a component with 1 button and an action for that button.
- That component contained both, HTML element and it's relevant functionality.

### What is the difference between HTML Element and a React Component?
- HTML element is the element which is part of core HTML tags.
- React Component is a function/class which contains html elements along with relevant functionalities.
- React Component contains various HTML elements.
- Example:
  - App is a Component.
  - div / header / button is an element. 

### creating a React Component
- Each component should have each separate file.
- Generally, we put all the components inside a directory called as components.
- Whatever the file name we give, that should be the function/class name. That is the component name.
- The component names have to be in PascalCasing.
- After creating the function/class, we also need to export it. Typically using export default <ComponentName>
- Whichever component needs it, it will import that in order to use.
- If any component does not want to use it. No need to import.

**Note: When starting a React application by running npm start. Make sure that you are inside the project directory. npx create-react-app <app_name> will create a new directory and put the code inside it. Make you you are inside that directory and then run npm start.**

### Casing - Recap
- Example:
MyButton - Pascal Casing
myButton - Camel Casing

## Task:
- Create a new react application.
- In that application, create some components.
  - Name - To show the name
  - Bio - To show an introduction message
  - ProfilePicture - To show dp.
  - ContactMe - To show phone number and email.