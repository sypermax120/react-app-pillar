import React from 'react';

function Button({ props }: any) {
  const { image, text } = props;

  if (image) {
    return (
      <button className="button">
        <img src={image} alt="img" />
        {text}
      </button>
    );
  }
  return (
    <button className="button">
      {text}
    </button>
  );
}

export default Button;
