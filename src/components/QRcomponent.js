import React from 'react';
import QRCode from 'react-qr-code';

import './QRComponent.css';

const QRComponent = () => {
  return (
    <div className='container_main'>
      <div className='qr_component_container'>
        <QRCode value='https://frontendmentor.io' bgColor='transparent' fgColor='#FFF' size={180}/>
      </div>
      <div className='qr_text_section'>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QRComponent;