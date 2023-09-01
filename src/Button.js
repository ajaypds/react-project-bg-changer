import React from 'react'

const Button = ({color, setColor}) => {
    const changeColor = (color) => {
        setColor(color)
        console.log({color})
    }
  return (
    <button className='text-center px-4 py-2 rounded-full' style={{backgroundColor: color}} onClick={()=>{changeColor(color)}} >
        Purple
    </button>
  )
}

export default Button