import ellipse25 from '../image/ellipse25.png'
import ellipse26 from '../image/ellipse26.png'
import ellipse27 from '../image/ellipse27.png'
import ellipse28 from '../image/ellipse28.png'
import ellipse29 from '../image/ellipse29.png'
import ellipse30 from '../image/ellipse30.png'

const Woman = () =>{
    
    return(
        <div className='woman'>
            <div className="woman__text">
                <h2>Search for other Top Airlines</h2>
                <div className='woman__text__block'>
                    <ul className='woman__text__block__image'>
                        <li><img src={ellipse25} alt="img" />Biman BD Airline</li>
                        <li><img src={ellipse26} alt="img" />Badal Airline</li>
                        <li><img src={ellipse27} alt="img" />Raza Airline</li>
                    </ul>
                    <ul className='woman__text__block__image'>
                        <li><img src={ellipse28} alt="img" />Hello Int. Airlines</li>
                        <li><img src={ellipse29} alt="img" />Pakistan International Airlines</li>
                        <li><img src={ellipse30} alt="img" />Hello International Airlines</li>
                    </ul>
                </div>
            </div>
            <div className="woman__image"></div>
        </div>
    );
}

export default Woman