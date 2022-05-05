import { useParams } from "react-router-dom";

const ToursDetail = (tours) =>{
    const location = useParams();
    const selectedTour = tours.tours.find((tour)=> tour.id === location.id);

    return(
        <div className="tour-detail">
            <p>{selectedTour.name}</p>
            <p>{selectedTour.price}$</p>
            <p>{selectedTour.decription}</p>
        </div>
    );
}

export default ToursDetail