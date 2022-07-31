import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [img, setImg] = useState("");
  const [dogRow, setDogRow] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImg(data.message));

    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(res => res.json())
      .then(data => setDogRow(data.message));
  }, [])

  return (
    <div>
      <img src={img} alt="dog" />

      <div>
        {
          dogRow.map((dog, index) => 
            <img key={index} src={dog} alt={dog} />
          )
        }
      </div>
    </div>
  );
}

export default App;
