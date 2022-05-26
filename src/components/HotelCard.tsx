import React from 'react';

function HotelCard({ props }: any) {
  const {
    price,
    id,
    country,
    name,
    image,
  } = props;

  return (
    <div className={`entire_city__section__box ${name}`}>
      <div className="entire_city__section__box__text">
        <div className="text__inner">
          <p>{price}</p>
          <p id="booking">
            Booking id:
            {id}
          </p>
          <p>{country}</p>
        </div>
        <img src={image} alt="img" />
      </div>
    </div>
  );
}

export default HotelCard;
