import React from 'react'

export const Quote = (props) => {
  return (
    <div>

      {/* {props.quotes} */}

      <blockquote>
        <p>
          <q>
            {props.quotes.quote}
          </q>
        </p>
        <span className='citeBy'>
          {props.quotes.cite}
        </span>
      </blockquote>
    </div>
  )
}
