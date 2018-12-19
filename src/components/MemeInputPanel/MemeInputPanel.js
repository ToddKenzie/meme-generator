import React from 'react'
import ChangeText from '../ChangeText/ChangeText';

const MemeInputPanel = ({ topText, bottomText, handleTopChange, handleBottomChange}) => {
    return (
        <section className='memeInputPanel'>
        <h3>Edit Your Titles Here</h3>
        <p>Top Bar: {topText}</p>
        <ChangeText
          text={topText}
          handleChange={handleTopChange}/>
        <p>Bottom Bar: {bottomText}</p>
        <ChangeText
          text={bottomText}
          handleChange={handleBottomChange} />
        </section>
    )
}





export default MemeInputPanel
