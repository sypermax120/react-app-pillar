import Header from "../Header";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Tours = ({authUser}) =>{
    const tours = useSelector((state) => state.tour.tours);
    
    return(
    <div className='App'>
        <div className='App__first'>
            <Header authUser={authUser}/>
            <div className='tours'>
                {tours.map((tour)=>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.rozavitriv.com/3/540x370/00/00/16/63/166325.jpg" />
                    <Card.Body>
                    <Card.Title>{tour.name}</Card.Title>
                    <Card.Text>{tour.price} $</Card.Text>
                    <Link to={`../tours/${tour.id}`}>Details</Link>
                    </Card.Body>
                </Card>
                )}
            </div>
        </div>
    </div>
    );
}

export default Tours