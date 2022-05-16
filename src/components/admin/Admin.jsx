import Header from "../Header";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { onAdd, sortByPrice, onDeleteTour } from '../../reducers/tourReducer';

const Admin = () => {

    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tour.tours);

    let newTour = {
        id: null,
        name: "",
        price: "",
        description: "",
        pets: false
      };

    return(
    <div className='App'>
        <div className='App__first'>
            <Header />
            <div className="change-tour">
                <h1>Admin menu</h1>
                <div className="add-tour">
                    <Form>
                        <Form.Group className="mb-3 Name" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name" onChange={e => (newTour.name= e.target.value )}/>
                        </Form.Group>
                        <Form.Group className="mb-3 Price" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Price" onChange={e => (newTour.price= e.target.value )}/>
                        </Form.Group>
                        <Form.Group className="mb-3 Description" controlId="formBasicCheckbox">
                            <Form.Control type="text" placeholder="Description" onChange={e => (newTour.description= e.target.value )}/>
                        </Form.Group>
                        <Form.Group className="mb-3 add-sort">
                            <Button variant="primary" type="reset" onClick={() => {dispatch(onAdd(newTour))}}>Add Tour</Button>
                            <Button variant="primary" type="reset" onClick={() => {dispatch(sortByPrice())}}>Sort Tour</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="dell-tours">
                    {tours.map((tour)=>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.rozavitriv.com/3/540x370/00/00/16/63/166325.jpg" />
                        <Card.Body>
                        <Card.Title>{tour.name}</Card.Title>
                        <Card.Text>{tour.price} $</Card.Text>
                        <Button variant="primary" type="reset" onClick={() => {dispatch(onDeleteTour(tour.id))}}>Dell Tour {tour.id}</Button>
                        </Card.Body>
                    </Card>
                    )}                        
                </div>
            </div>
        </div>
    </div>
    );
}

export default Admin