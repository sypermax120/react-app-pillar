const Button = (props) =>{
    const {image, text} = props.props

    if(image){
        return(
            <button className="button">
                <img src={image} alt="img" />
                {text}
            </button>
        );
    };
    return(
        <button className="button">
            {text}
        </button>
    );
};

export default Button;