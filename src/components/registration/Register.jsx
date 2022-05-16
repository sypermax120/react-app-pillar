import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createUser } from '../../reducers/userReducer';


const Register = () => {
    const dispatch = useDispatch();

    let newUser = {
        id: null,
        firstName: '',
        secondName: '',
        mail: '',
        pass: ''
    }

    return(
    <Form>
        <Form.Group className="mb-3" controlId="formGridFirstName">
            <Form.Control type="text" placeholder="First name" onChange={e => (newUser.firstName= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridLastName">
            <Form.Control type="text" placeholder="Last name" onChange={e => (newUser.secondName= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Mail" controlId="formBasicEmail">
            <Form.Control type="mail" placeholder="Mail" onChange={e => (newUser.mail= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={e => (newUser.pass= e.target.value )}/>
        </Form.Group>
        <Button variant="primary" type="reset" onClick={() => {dispatch(createUser(newUser))}}>Regiter</Button>
    </Form>
    );
}

export default Register