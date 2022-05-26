import React from 'react';
import hotelsBtnLogo from '../image/hotels_btn_logo.png';
import ellipse31 from '../image/ellipse31.png';
import ellipse32 from '../image/ellipse32.png';
import ellipse33 from '../image/ellipse33.png';
import swimming from '../image/swimming.png';
import wifi from '../image/wifi.png';
import snow from '../image/snow.png';
import dinner from '../image/dinner.png';
import Button from './Button';
import FacilitiesImage from './FacilitiesImage';

function FacilitiesBlock() {
  const imageData = [
    {
      logo: swimming,
      text: 'Swimming',
    },
    {
      logo: wifi,
      text: 'Wifi',
    },
    {
      logo: snow,
      text: 'AC',
    },
    {
      logo: dinner,
      text: 'Dinner',
    },
  ];

  return (
    <div className="info">
      <div className="info__facilities">
        <div className="info__facilities__title">
          <p>Facilities</p>
          <p>See More</p>
        </div>
        <div className="info__facilities__image">
          {
                        imageData.map((element) => <FacilitiesImage props={element} />)
                    }
        </div>
      </div>

      <div className="info__hotels">
        <p>Hotels for You</p>
        <p>5 days 6 nights</p>
        <Button props={{ image: hotelsBtnLogo, text: '$4000' }} />
      </div>

      <div className="info__search">
        <input className="info__search__input" type="text" placeholder="Search....." />
        <div className="info__search__images">
          <img src={ellipse31} alt="" />
          <img src={ellipse32} alt="" />
          <img src={ellipse33} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FacilitiesBlock;
