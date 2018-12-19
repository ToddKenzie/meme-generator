import React from 'react'
import './ChangeText.css'

const ChangeText = ({text, handleChange}) => {
    return (
        <div className='ChangeText'>
            <input type='text' defaultValue={text} onChange={handleChange} />
        </div>
    )
}

export default ChangeText