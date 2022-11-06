
## project Gitbucket

# Project #3 - GitFind
- Search by Username.
- Show the following:
  - Name
  - Profile Picture
  - Repositories (Count & The list). If you click on any of the repository, then it will take to github page.
  - Follower (Count and List). If you click on any name, then take to that user's page on our platform.
  - Same with Following.
  - Github joining date.
  - Location

**Note: If we are importing anything from a package, we directly give the package name, however if we are importing anything from our codebase, we import the path using ./ followed by the filename.**

# Axios
- This is a better way to make API Calls.
- This is a very good alternative to fetch.
- To install: npm install axios


## 2022-09-23
# Contd. of Axios
- Axios is better than fetch because:
  - We don't need to convert to JSON explicitly. Axios will automatically do that for us.
  - If we have multiple network requests for the same backend, we can put the common part in one single object so that we don't have to write it multiple times.
  - Only 1 .then promise is needed to be handled.


## Contd. on GitFind
- Implementation of the Search functionality.
- Implement the Repository List.
- Completed the Detail Component showing of data part.
- Started with CSS
- Color Palette - https://coolors.co/palette/ffffff-00171f-003459-007ea7-00a8e8


## useRef hook
- This hook is part of React.
- This hook is an alternate to document.getBlahBlah.
- We NEVER directly access the DOM.
- We ALWAYS access the Virtual DOM.
- We techhnically CAN access the DOM directly. However, react will not be able to detect that we have accessed the DOM.
- React asks us to NOT access directly, instead use the React Provided methods. This is helpful because then React can track what changes we are doing. That tracking is important for re-rendering optimizations.
- Usage:
  - Import the useRef hook from react. This is a named export.
  - Create a reference object by running `const abcdRef = useRef();`.
  - Connect this to the DOM element by giving a ref attribute to that element. `<p ref={abcdRef}></p>`.
  - In order to access the DOM element, we need to ues the variable's current property. `abcdRef.current`. We need this because in React, it is possible to have a reference of stale state. But we want (99% of the times) the current state's reference.
  - After this, we can access the element as usual. Properties like innerHTML, appendChild, style, value, click(), addEventListener().
- It is a very powerful hook, so we should be careful with that and not use it everywhere.

## Event
- These are actions that happen on a website.
- These are objects which contain certain things related to that event that has taken place.
- When we use any event listner in React way, in the function we will get the event as it's first parameter.

## event.preventDefault()
- Some of the events have certain actions associated with it.
- Common example of forms, when we submit the form, browser triggers an action to redirect the page to the server.
- Most of the times, we want to stop that default thing from happening, therefore we use the event object's preventDefault() method.
- preventDefault will prevent the default action from happening for that particular event.
- This is used when we customize the functionality/logic and we do not want the default functionality/logic to happen.
- This is part of Vanilla JS.


## State Lifting / Lifting State Up
- Sending data from parent to child component is easy, very easy. By using props.
- However, sending the data from a child component to parent component is not so easy. We need to implement a little trick here.
- Approach:
  - In the parent component, we create a function.
  - We pass that function as prop to the child component. (That is possible because JS supports First Class Functions).
  - From the child component, we invoke that function and send the actual data in the agruments.
  - Now, the function will be executed, but the function definition is written in the parent component. Therefore the data that we sent is now accessible in the parent component.
  - We can then do whatever we want with that data and handle accordingly.
  - At end of the day, we achieved sending of data from a child component to parent component.
- This is known as State Lifting / Lifting State Up
- There are alternatives to this, such as Redux and Context API. But this is comparatively a very starightforward approach.


**Note: If you give target="_blank" to any anchor tag. MAKE SURE to give rel="noreferrer", otherwise Reatc will give warning and with warning we will not be able to host online.**


## Further Reading for CSS
- https://cssbattle.dev/
- https://flexboxfroggy.com/
- https://cssgridgarden.com/
- https://flukeout.github.io/

# Sep-26, 2022

### Further Reading
- To generate random images
  - https://www.blobmaker.app/
  - https://www.magicpattern.design/tools/blob-generator
  - https://passionhacks.com/blob-maker/?n=1&e=6&gw=6&se=70&c=d1d8e0&o=0
  - https://shuffle.dev/tools/blob-generator
- For design Inspiration
  - https://dribbble.com/
  - Pinterest
- https://cssgradient.io/


## CSS Calc
- This is a built in method of CSS.
- This is used to calcualate the dimensions.
- We can perform basic mathematical operations inside it.
- The units of measurement can be heterogenous.
- The browser will take care of conversion and everything.
- Since CSS is not a programming language, we need to take care of some things like the space.
- There NEEDS to be space between the different dimensions.

## Outline vs Border
- Borders are at the edge of the element.
- Outline can go outside the limits of the element.
- To do that, we use outline-offset property.

## Moment JS
- Used for better time parsing.
- Very cool feature, it can give reference time. (1 day ago, 3 weeks ago, 2 years ago).
- It is a super popular package, can be used in Vanilla JS, React Application, NodeJS, anything JS.
- We can use it to compare time.
- We can use it to format the date/time as well.
- To install: `npm install moment`

# Contd on GitFind Project.
- Completed the CSS of most parts.
- Added MomentJS to handle the timeformats.
- Added conditional rendering to show/hide the components.
- Error Handling in case of incorrect Username.

# Sep-27, 2022

# Complete the GitFind Project.
- Fix invalid username showing initially issue.
- Footer
- Implement showing list of followers and following as well. (Conditional Rendering)
- Load more functionality.
- Host on Netlify
- Hosted URL - https://gitfind-react.netlify.app/
- Github Repo - https://github.com/aayusharyan/gitfind

**Important Note: When the setState depends on the previous state value, in that case, we need to pass a callback into that function. The callback will accept the current state as it's parameter. If the new state does not depend on the current state, then we can set the state directly.**