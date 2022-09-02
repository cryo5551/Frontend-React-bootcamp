# Getting Started with Create React App


### components
- It is re-usable functions/classes which contains the JSX;
- JSX -> Javascript + XML.
- Basically we can say its the functionl html with the help of javascript.
- it contains DOM elements and its functnality.
- one file can have multiple functions/classes, therefore it can have multiple components.
- but we don't prefer using multiple classes/functions in a single file.

- **Name must be in pascal casing not camel casing**

- A component can return JSX.
- make sure to write return properly
- Syntex:: return(
 -  JSX
 - );
- we have to export the component, commonly we use 
 - Syntex:: export default ComponentName(in pascal casing);
- normally there is only one component present so we use default(1 file, 1 component, 1 default );

- normally to maintaine cleanner code structure, we create a directory called "components" and put all the components we use in there.
- components provide code reusablity


## props
- props is short for properties.
- props mean sending data from one component to another.
- Typically it is parent to child.
- app.js is parent component here and MyComponent is child component.
- in parent  we will write in form of attributes and it'll go in the child as data; 
- becouse we write that in html and we can only use attributes there.
- child will recive the data in form of a object, that we can use in our JSX.
- we will recive it as parameter in our child component.
- only flow from parent to child and its data can be anything.


### Parent and child
- here in react App component is root.
- the parent is the component that is importing data.
- And the component that is getting exported and used is called child component.


- **It is possible that even we write console once, but it shows twice. That is because react will do pre-processing to check for errors and optimizations. We can fix that by going to index.js and removing <React.StrictMode> opening and closing tgs**


## Styling
- We use this to give better looks and design to our page.
- We can change any look and feel, from a simple text color to a complicated animation.
- This also is used to make website responsive.
- We should be able to do this in React apps as well.
- There are many ways to attach styling.
  - External CSS -> Using index.css
  - Index.css is imported at index.js level, therefore it is available pretty much everywhere.
- In React, we don't use class attribute. Instead, we use className.
  - Modular CSS -> For every module, we will have a css.
  - The idea is better code organization.
  - For each module, we will have it's relevant css file.
  - This keep the code files organized and structured.
  - Instead of having 1 very large file, we have more files but smaller in size comparatively.
  - There is no security advantage, it will be applied everwhere. It's just for better code management and maintenance.
- Third Approach: Inline styling.
  - In the same like we give the style attribute.
  - This attribute is actually an object.
  - Here, we use camelCasing for the property. Instead of typically using kebab case for properties in the CSS file.
  - We can directly write the style inline or use a variable. (Depends on the readability factor).


**Note: When giving CSS classes based styling. DO NOT use class attribute, instead, use className attribute.**

## Assignment:
- Create a React application.
- In that, create a component called as colorBox.
- Reuse that component 4-5 times.
- Every time, pass a unique color as a prop.
- Change the color of that colorbox div into whatever is passed as prop.
