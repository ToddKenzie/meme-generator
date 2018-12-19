import React from 'react'
import ChangeText from '../ChangeText/ChangeText';
import './MemeInputPanel.css'

const MemeInputPanel = ({ topText, bottomText, handleTopChange, handleBottomChange}) => {
    return (
        <section className='MemeInputPanel'>
        <h3>Edit Your Titles Here</h3>
        <p>Top Bar</p>
        <ChangeText
          text={topText}
          handleChange={handleTopChange}/>
        <p>Bottom Bar</p>
        <ChangeText
          text={bottomText}
          handleChange={handleBottomChange} />
        </section>
    )
}

export default MemeInputPanel
