import React from 'react'
import './ChangeText.css'

const ChangeText = ({text, handleChange, value}) => {
    return (
        <div className='ChangeText'>
            <input type='text' defaultValue={text} value={value} onBlur={handleChange} />
        </div>
    )
}

export default ChangeText