import React from 'react'

function Item({ listing_id, url, image, title, currency_code, price, quantity }) {
  let level;
  if (quantity >= 20) {
    level = 'high'
  }
  else if (quantity <= 10) {
    level = 'low'
  } else { level = 'medium' }
  return (
    <div className='item'>
      <div className="item-image">
        <a href={url}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currency_code}{price}</p>
        <p className={`item-quantity level-${level}`}>{quantity} left</p>
      </div>
    </div>
  )
}

export default Item
