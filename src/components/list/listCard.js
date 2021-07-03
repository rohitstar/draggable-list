import React from 'react'

const ListCard = (props) => {
  return (
    <div
      style={{
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
        // border: '2px solid #aaa',
        borderRadius: '10px',
        margin: '5px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h2 style={{ padding: '0 10px' }}>{props.title}</h2>
    </div>
  )
}

export default ListCard
