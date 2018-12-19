import React from 'react'
import './DisplayMeme.css'

const DisplayMeme = ({ topText, bottomText}) => {
    return (
        <section className='DisplayMeme'>
            <p className='topText'>{topText}</p>
            <p className='bottomText'>{bottomText}</p>
        </section>
    )
}

export default DisplayMeme