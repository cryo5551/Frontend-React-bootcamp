## Mapping function.
- Instead of write the same component again and agin multiple times with different props, we write the data into an array.
- Later we just map on that array and return the Component from that map function.
- We can put anything in that callback function. We can give any logic as we wanted.
- Finally, we should return either a component or JSX from that callback.

**Warning: Each child in a list should have a unique "key" prop**
- We know react will track changes for better optimization.
- But, in a loop, it is difficult to track. Therefore react will ask US (Developers) to give a unique key property to the items.
- This we can simply give the index.

- In style attribute, if we are giving the object directly, then we use double brackets. If we are referring to an object variable, then we use single curly.