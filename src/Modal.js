import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '20%',
    left: '20%',
    transform: 'translate(+1%, -10%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
position: 'fixed',
top: 0,
left: 0,
right: 0,
bottom: 0,
backgroundColor: 'rgba(0, 0, 0, .7)',
zIndex: 1000
}

export default function modal({ open, children, onClose }) {
   if (!open) return null
    return (
        <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button onClick={onClose}>&times;</button>
          {children}  
        </div>
        </div>
    )
}
