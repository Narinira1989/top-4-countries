import { useState } from 'react';
import { data } from './data';
import SpainSlides from './slides-app';
import './App.css';


function App() {

  const [country, setCountry] = useState(data);

  const removeCountry = (id) => {
    let newCountry = country.filter(element => element.id !== id)
    setCountry(newCountry)
  }

  return (
<div>
  <div className='heading'>
    <h1>Top {country.length} countries to visit</h1>
  </div>

    <div>
      {country.map((el => {
        const {id, country, photo, description} = el;

        return(
          
        <div className='container' key={id}>

          <div className='heading'>
            <h2>{id} - {country} </h2>
          </div>

          <div className='heading'>
          <img src={photo} width="450px" alt='spain' />

          </div>

          <div className='heading'>
            <p>{description}</p>
          </div>

          <div className='heading'>
          <button onClick={() => removeCountry(id)} className='btn'>remove</button>
          </div>

        </div>
        

        )

      }))}
    <div className='heading '>
      <button onClick={() => setCountry([])} className='btnDelete'>Delete ALL</button>
    </div>

  <div className='heading'>
    <h3>Some slides of these countries: </h3>
  </div>

  <div className='slide'>
    <SpainSlides/>
  </div>

    </div>
</div>
  );
}

export default App;
