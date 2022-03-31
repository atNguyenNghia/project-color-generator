import React ,{useState} from "react";
import Values from 'values.js'
import SingleColor from "./components/SingleColor";

function App() {
  const [color , setColor] = useState('');
  const [error , setError] = useState(false);
  const [list , setList] = useState(new Values ('#f58566').all(5)) // all(5) là cộng 5%
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  console.log('error' , error);
  return (
    <>
      <section className="container">
        <h3>Color</h3>
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            value = {color}
            onChange= {e => setColor(e.target.value)}
            placeholder="#f58566"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index)=> {
            return(
              <SingleColor
                key={index}
                {...color}
                index = {index}
                hexColor = {color.hex}
              />
            )
        
          })
        }
      </section>
    </>
  );
}

export default App;
