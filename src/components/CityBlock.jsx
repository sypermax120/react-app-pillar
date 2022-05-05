import HotelCard from "./HotelCard";
import entire_img from "../image/entire_img.png"
const CityBlock = () =>{
    const cityCards = [
        {
            price: '600$',
            id: '123456',
            country: 'Turkey resort',
            name: 'box1',
            image: entire_img
        },
        {
            price: '800$',
            id: '654321',
            country: 'Bulgaria resort',
            name: 'box2',
            image: entire_img
        },
        {
            price: '900$',
            id: '456321',
            country: 'Maldives resort',
            name: 'box3',
            image: entire_img
        }
    ]

    return(
        <div className='entire_city'>
            <h1>Entire city of choice</h1>
            <div className='entire_city__section'>
                {
                    cityCards.map((element)=>
                        <HotelCard props={element}/>
                    )
                }
            </div>
            <div className='entire_city__bg'></div>
            <div className='entire_city__show_more'></div>
        </div>
    );
}

export default CityBlock