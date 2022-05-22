import React from 'react'
import Item from './Item'

function Listing({ items }) {

  const products = items.filter(el => el.state === 'active');

  products.forEach((el) => {
    if (el.title && el.title.length > 50) {
      el.titleText = el.title.substr(0, 50) + '...';
    }
    else if (el.title) {
      el.titleText = el.title
    }

    if (el.currency_code === 'USD') {
      el.currency_code = '$';
    }

    if (el.currency_code === 'EUR') {
      el.currency_code = '€'
    }

    if (el.MainImage) {
      el.itemImage = el.MainImage.url_570xN
    }
    else el.itemImage = '';
  });

  return (
    <div className='item-list'>
      {products.map((el) => <Item listing_id={el.listing_id}
        url={el.url}
        image={el.itemImage}
        title={el.titleText}
        currency_code={el.currency_code}
        price={el.price}
        quantity={el.quantity}
        key={el.listing_id} />)}
    </div>
  )
}

export default Listing

Listing.defaultProps = []