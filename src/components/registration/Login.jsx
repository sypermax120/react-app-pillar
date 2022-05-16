import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/userReducer';

const Login = () => {
    const dispatch = useDispatch();

    let checkUser = {
        mail: '',
        pass: ''
    }

    return(
    <Form>
        <Form.Group className="mb-3 Mail" controlId="formBasicEmail">
            <Form.Control type="mail" placeholder="Mail" onChange={e => (checkUser.mail= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={e => (checkUser.pass= e.target.value )}/>
        </Form.Group>
        <Button variant="primary" type="reset" onClick={() => {dispatch(loginUser(checkUser))}}>Log in</Button>
    </Form>
    );
}

export default Login