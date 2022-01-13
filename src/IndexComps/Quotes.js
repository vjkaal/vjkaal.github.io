import React from 'react'
import './css/Quotes.css'
import { Quote } from './Quote'

export const Quotes = () => {

  const quotes = [
    {
      srno: 1,
      quote: "There are 10 types of people in this World, those who understand binary and those who don't",
      cite: "Anonymous"
    },
    {
      srno: 2,
      quote: "Talk is cheap. Show me the code.",
      cite: "Linus Torvalds"
    }

  ]


  return (
    <div className='quotes'>
      {quotes.map( (quote) => {
        return <Quote key={quote.srno} quotes={quote} />
      })}
    </div>
  )
}
