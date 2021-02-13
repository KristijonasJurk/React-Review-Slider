import React, { useState, useEffect } from 'react';
import data from './data';
import Slide from './Slide';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
      </h2>
      </div>
      <Slide people={people} index={index} setIndex={setIndex} />
    </section>
  )
}

export default App;
