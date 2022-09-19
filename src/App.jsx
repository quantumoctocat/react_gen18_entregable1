import React from 'react'
import { useState } from 'react'
import axios from "axios";
import './App.css'
import colors from "./utilities/colors"

function App() {
  const randomColorIndex = function(array) { return Math.floor(Math.random() * array.length) }
  const firstColor = colors[randomColorIndex(colors)]
  const [randomColor, setRandomColor] = useState(firstColor)
    
  const [quote, setQuote] = useState("(Quote)")
  const [author, setAuthor] = useState("(Author)")

  const handleClick = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data.content)
      setAuthor(res.data.author)
    })
    setRandomColor(colors[randomColorIndex(colors)]);
  }

  return (
    <div className="quote-box" style={{backgroundColor: randomColor}}>
      <div className="quote-text">
        <p>{quote}</p>
      </div>
      <div className="quote-author">
        <p>{author}</p>
      </div>
      <div className="quote-button">
        <button onClick={handleClick}>New Quote</button>
      </div>
    </div>
  )
}

export default App
