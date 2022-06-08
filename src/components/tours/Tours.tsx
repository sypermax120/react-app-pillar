import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../main/Header';
import { RootState } from '../../mock/store';
import { ItourData } from '../../mock/tours';
import Search from './Search';
import Loading from '../main/Loading'

function Tours() {
  const tours = useSelector((state : RootState) => state.tour.tours);

  return (
    <div className="App">
      <div className="App__first">
        <Header />
        <Search />
          <div className="tours">
            {tours.length ? tours.map((tour: ItourData) => (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.rozavitriv.com/3/540x370/00/00/16/63/166325.jpg" />
                <Card.Body>
                  <Card.Title>{tour.name}</Card.Title>
                  <Card.Text>
                    {tour.price}
                    {' '}
                    $
                  </Card.Text>
                  <Link to={`../tours/${tour.id}`}>Details</Link>
                </Card.Body>
              </Card>
            )): <Loading />}
          </div>
      </div>
    </div>
  );
}

export default Tours;
