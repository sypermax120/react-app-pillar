import { React } from 'react';
import ellipse22 from '../image/ellipse22.png';
import ellipse23 from '../image/ellipse23.png';
import ellipse24 from '../image/ellipse24.png';

function Resort() {
  return (
    <div className="resort">
      <div className="resort__text">
        <h3>Resort Surprises</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <li>
            <div className="resort__text__icon pool" />
            Infinity Pool
          </li>
          <li>
            <div className="resort__text__icon beach" />
            The Beach
          </li>
          <li>
            <div className="resort__text__icon surprise" />
            Beach Surprise
          </li>
          <li>
            <div className="resort__text__icon activities" />
            Beach Activities
          </li>
        </ul>
      </div>
      <div className="resort__image">
        <div className="resort__image__main">
          <div className="resort__image__main__play" />
        </div>
        <div className="resort__image__bottom">
          <div className="resort__image__bottom__circle">
            <img src={ellipse22} alt="img" />
            <img src={ellipse23} alt="img" />
            <img src={ellipse24} alt="img" />
          </div>
          <p>Play your favourite</p>
        </div>
      </div>
    </div>
  );
}

export default Resort;
