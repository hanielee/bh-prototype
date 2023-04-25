import React, { useState } from 'react';
import './Button.css';

function Popup() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <button className='rounded-button' onClick={handleClick}>
        Let's chat!
      </button>
      {isActive && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              zIndex: '998',
            }}
            onClick={handleClose}
          />
          <div
            style={{
              width: '300px',
              height: '100px',
              borderRadius: '10px',
              backgroundColor: 'white',
              border: '1px solid black',
              textAlign: 'center',
              lineHeight: '100px',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '999',
            }}
          >
            <div
              style={{
                content: '""',
                position: 'absolute',
                left: '50%',
                top: '99px',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderTop: '20px solid #fff',
                borderRight: '20px solid transparent',
                borderBottom: '0',
                borderLeft: '20px solid transparent',
              }}
            ></div>
            <div
              style={{
                position: 'center',
                cursor: 'pointer',
                color: '#000000',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'Urbanist',
              }}
              onClick={handleClose}
            >
              Bear Huddle is no longer active.
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Popup;
