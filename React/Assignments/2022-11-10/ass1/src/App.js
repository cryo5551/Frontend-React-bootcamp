import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  

  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");

  
  
  useEffect(_ => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=b001bb67&app_key=b891d4ee4302f1635d0f592268b48afe`;
    (async _ =>{
      const responce = await axios.get(url);
      console.log(responce.data.hits);
      setList(responce.data.hits);
    })();
  },[ query ]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <main className='App'>
      <h2>Search for Food Recipies</h2>
      <input className='search' type="text" name="query" onChange={onChange} value={query}  placeholder="Search Food"/>
      <br/>
      <info className="recipes">
      
      {list.map((e,i,arr) => {
        return (
          <div key={i+ 10000} className="recipe">
            <img key={i+100} src={e.recipe.image} alt="img" className='dish-img'></img>
            <p key={i} className="dish-name">{e.recipe.label}</p>
            <p key={i+69696969} className="dish">{e.recipe.mealType[0]}</p>
            <h3>Ingredients</h3>
            <ul className='hide'>
              {e.recipe.ingredientLines.map((e,i) => {
                return(
                  <li key={i+6969}>{e}</li>
                );
              })}
            </ul>
            <a key={i+1000} className="dish-url" href={e.recipe.url} target="_blank" rel="noreferrer" >Learn More...</a>
          </div>
        );
        })}


      </info>

    </main>
  );
}

export default App;
