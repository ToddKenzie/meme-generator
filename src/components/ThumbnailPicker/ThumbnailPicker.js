import React from 'react'
import './ThumbnailPicker.css'

const ThumbnailPicker = ({ images, changeImageSelection, imageSelection, value }) => {
    const displayEachImage = images.map((image) => <img src={image.link} value={image.id} onClick={changeImageSelection}/>);
    return (
        <section className='ThumbnailPicker'>
            <div className='box'>
              {displayEachImage}
            </div>
        </section>
    )
}

export default ThumbnailPicker