import React from 'react'
import './DisplayMeme.css'

const DisplayMeme = ({ topText, bottomText, updateImage }) => {
    const bkgd = "url('" + updateImage() + "')";
    return (
        <section className='DisplayMeme' 
            style={{backgroundImage: bkgd}}>
            <p className='topText'>{topText}</p>
            <p className='bottomText'>{bottomText}</p>
        </section>
    )
}

export default DisplayMeme