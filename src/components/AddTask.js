import React from 'react'

export const AddTask = () => {
  return (
    <div className='addTask'>
        <form >
            <input type="text" placeholder='enter Task' />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
