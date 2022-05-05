import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Tours = (tours) =>{
    
    return(
        <div className='tours'>
            {tours.tours.map((tour)=>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://img.rozavitriv.com/3/540x370/00/00/16/63/166325.jpg" />
                <Card.Body>
                <Card.Title>{tour.name}</Card.Title>
                <Card.Text>{tour.price}$</Card.Text>
                <Link to={`../tours/${tour.id}`}>Details</Link>
                {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            )}
        </div>
    );
};

export default Tours