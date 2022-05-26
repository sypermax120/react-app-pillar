import React from 'react';

function FacilitiesImage({ props }: any) {
  const {
    logo,
    text,
  } = props;

  return (
    <div className="info__facilities__image__block">
      <div className="info__facilities__image__block__img">
        <img src={logo} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default FacilitiesImage;
