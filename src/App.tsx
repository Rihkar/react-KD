import React, { useState } from 'react';
import './App.scss';
import './Styles/Reset.scss';
import Episodes from './Data/Data';

const App = () => {
  const [episodes, setEpisodes] = useState(Episodes);
  const [inputValue, setInputValue] = useState('');
  const filterEpisode = (e:any) => {
    e.preventDefault();
    const searched = [...Episodes].filter((element) => element.name.includes(inputValue));
    setEpisodes(searched);
  };

  return (
    <div className="App">

      <h1>Search Homeland Episodes</h1>

      <form
        onSubmit={filterEpisode}
        className="inputAndButtonBox"
        action="submit"
      >
        <input
          required
          className="input"
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"

        >
          search
        </button>

      </form>
      {/* {inputValue.length === 0 && 'not found'} */}
      <div className="episode-container">

        {episodes.map((element) => (
          <div className="individual-episode">
            <img src={element.image.medium} alt="" />
            <div className="episode-parameters">
              <div>
                {element.name}
              </div>

              <div>
                S
                {element.season}
                E
                {element.number}
              </div>

            </div>

            <div className="episode-parameters">
              <div>{element.runtime}</div>
              <div>{element.rating.average}</div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};
export default App;
