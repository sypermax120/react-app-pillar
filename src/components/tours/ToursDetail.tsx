import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header';
import { RootState } from '../../mock/store';
import { ItourData } from '../../mock/tours';

function ToursDetail() {
  const location = useParams();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const selectedTour = tours.find((tour: ItourData) => tour.id === location.id);

  if (!selectedTour) { return null; }
  return (
    <div className="App">
      <div className="App__first">
        <Header />
        <div className="tour-detail">
          <p>{selectedTour['name']}</p>
          <p>
            {selectedTour['price']}
            {' '}
            $
          </p>
          <p>{selectedTour['description']}</p>
        </div>
      </div>
    </div>
  );
}

export default ToursDetail;
