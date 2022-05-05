import relaxing1 from '../image/relaxing1.png'
import relaxing2 from '../image/relaxing2.png'
import relaxing3 from '../image/relaxing3.png'

const Relaxing = () =>{
    
    return(
        <div className='relaxing'>
            <div className="relaxing__image">
                <img src={relaxing1} alt="img" />
                <img src={relaxing2} alt="img" />
                <img src={relaxing3} alt="img" />
            </div>
            <div className="relaxing__text">
                <p>Weclome to Sajid Studio resort</p>
                <h2>Relaxing Pleasure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur semper vitae integer eget velit lobortis. Maecenas ultrices nunc lobortis ac vivamus neque, eget. Placerat auctor enim nisl amet, in sem at. Elementum nec consequat vulputate nibh nisl ultrices diam sapien, nibh. Odio faucibus semper nibh vulputate condimentum.</p>

            </div>
        </div>
    );
}

export default Relaxing