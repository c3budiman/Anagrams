import './App.css';
import React, { useState } from 'react';
import { isAnagram } from './helpers/anagramsolverbasic'

function App() {
	const [word, setWord] = useState("");

  const [listWords, setlistWords] = useState([]);
  
  const [anagramList, setAnagramList] = useState([]);

	const AddWords = () => {
    let curListWords = listWords;
		if(!curListWords.includes(word)) {
      curListWords.push(word);
      setlistWords(curListWords);
      try {
        setAnagramList(isAnagram(curListWords))
      } catch (error) {
        alert(error) 
      }
    }
		setWord("");
		document.getElementById("words").focus();
	}


	return (
		<div>
			<div className="Header">
				<img alt="Logo" className="Logo" height="80px" src="/wb.JPG" />
				<h1 className="HeaderText">Anagram checker</h1>
			</div>

			<div className="flex-container">
				<div className="flex-input">
					<p className="HeadingWords">
						Add any words here :
					</p>
          <input 
            value={word} 
            placeholder="kata"
            onChange={(e) => setWord(e.target.value)} 
            onKeyPress={e => {
              if (e.key === 'Enter') {
                AddWords()
              }
            }}
            id="words" type="text">
          </input> 
          <br />
					<button id="addWords" className="btn btn-green" onClick={() => AddWords()}>Add</button>
				</div>

				<div className="flex-input-temp">
					<p className="HeadingWords">
						Added Words :
					</p>
					<ul className="addedWords">
					{
						listWords.map(element => {
							return (<li key={element}>{element}</li>)
						})
					}
					</ul>
				</div>
			</div>

			<div className="flex-container">
        <div className="flex-result">
          <p className="HeadingWords">
						Anagram List :
					</p>
          <p id="anagramJson">
            {
              JSON.stringify(anagramList)
            }
          </p>
        </div>
			</div>
		</div>
	);
}

export default App;
