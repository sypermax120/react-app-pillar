import Header from "../Header";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const ToursDetail = () =>{
    const location = useParams();
    const tours = useSelector((state) => state.tour.tours);
    const selectedTour = tours.find((tour)=> tour.id === location.id);

    return(
        <div className='App'>
        <div className='App__first'>
            <Header />
            <div className="tour-detail">
                <p>{selectedTour.name}</p>
                <p>{selectedTour.price}$</p>
                <p>{selectedTour.description}</p>
            </div>
        </div>
    </div>
    );
}

export default ToursDetail