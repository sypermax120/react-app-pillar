import React, { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { onAdd, sortByPrice, onDeleteTour, DeleteTour, AddTour } from '../../reducers/tourReducer';
import Header from '../main/Header';
import { RootState } from '../../mock/store';
import { ItourData } from '../../mock/tours';
import { AddHistory } from '../../reducers/historyReducer';
import moment from 'moment';

function Admin() {
  const dispatch = useDispatch();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const authUser = useSelector((state: RootState) => state.user.authUser);
  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);

  let newTour = {
    id: null,
    name: '',
    price: '',
    description: '',
    pets: false,
  };

  const TourHistory = (value: any) => {
    let timeNow = moment().format('DD-MM-YYYY, hh:mm:ss');
    let history = {
      createdAt: timeNow,
      name: newTour.name,
      adminName: authUser,
      type: value,
    };
    dispatch(AddHistory(history));
  };

  return (
    <div className="App">
      <div className="App__first">
        <Header />
        {
          isAdmin ? (
            <div className="change-tour">
              <h1>Admin menu</h1>
              <div className="add-tour">
                <Form>
                  <Form.Group className="mb-3 Name" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" onChange={(e) => { newTour.name = e.target.value; }} />
                  </Form.Group>
                  <Form.Group className="mb-3 Price" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Price" onChange={(e) => { newTour.price = e.target.value; }} />
                  </Form.Group>
                  <Form.Group className="mb-3 Description" controlId="formBasicCheckbox">
                    <Form.Control type="text" placeholder="Description" onChange={(e) => { newTour.description = e.target.value; }} />
                  </Form.Group>
                  <Form.Group className="mb-3 add-sort">
                    <Button variant="primary" type="reset" onClick={() => { TourHistory(1), dispatch(onAdd(newTour)), dispatch(AddTour(newTour)) }}>Add Tour</Button>
                    <Button variant="primary" type="reset" onClick={() => { dispatch(sortByPrice()); }}>Sort Tour</Button>
                  </Form.Group>
                </Form>
              </div>
              <div className="dell-tours">
                {tours.map((tour: ItourData) => (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.rozavitriv.com/3/540x370/00/00/16/63/166325.jpg" />
                    <Card.Body>
                      <Card.Title>{tour.name}</Card.Title>
                      <Card.Text>
                        {tour.price}
                        {' '}
                        $
                      </Card.Text>
                      <Button variant="primary" type="reset" onClick={() => { TourHistory(0), dispatch(onDeleteTour(tour.id)), dispatch(DeleteTour(tour.id)) }}>
                        Dell Tour
                        {tour.id}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ) : (<div>page not found</div>)
        }
      </div>
    </div>
  );
}

export default Admin;
