export const named_fn = () => {
    console.log("This is a named export function 1");
  }
  
  export const named_fn2 = () => {
    console.log("This is a named export function 2");
  }
  
  export const educator_name = "Aayush";
  
  //Approach 1, put the export during variable declaration.
  
  //Approach 2, create a separate export object.
  // export { named_fn, educator_name, named_fn2 };
  
export const d = () => {
    console.log("This is a default function");
  }
  



const hello = () => {
    console.log("Hello from named");
}
export default hello;