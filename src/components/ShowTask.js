import React from 'react'

export const ShowTask = () => {
  return (
    <div className="showTask">
        <p className="head">
            <span>
                <span className="title">Todo</span>
                <span className='count'>0</span>
            </span>
            <span>
                <button className="clear">clear All</button>
            </span>
        </p>
    </div>
  )
}
