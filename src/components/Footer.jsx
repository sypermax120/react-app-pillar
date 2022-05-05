import Button from "./Button";

const Footer = () =>{

    return(
        <footer className='footer'>
            <div className="footer__top">
                <h2>Get better work</h2>
                <p>See why million of people accross 195 uses Desh dot</p>
                <div className="footer__top__block">
                    <input className="footer__top__block__input" placeholder="artalisajid@gmail.com"></input>
                    <Button props={{text:'Try Free'}}/>
                </div>
            </div>
            <div className="footer__middle">
                <div className='footer__middle__block'>
                    <ul className='footer__middle__block__list'>
                        <p>Sajid Studio</p>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                    <ul className='footer__middle__block__list'>
                        <p>Links</p>
                        <li>Home</li>
                        <li>Prior</li>
                        <li>Download</li>
                        <li>About</li>
                        <li>Service</li>
                    </ul>
                    <ul className='footer__middle__block__list'>
                        <p>Support</p>
                        <li>FAQ</li>
                        <li>How it</li>
                        <li>Features</li>
                        <li>Contact</li>
                        <li>Reporting</li>
                    </ul>
                    <ul className='footer__middle__block__list'>
                        <p>Contact Us</p>
                        <li>+923431279488</li>
                        <li>artalisajid@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <span>Copyright & Design by Sajid</span>
                <span>Terms of use</span>
                <span>Privacy Policy</span>
            </div>
        </footer>
    );
}

export default Footer